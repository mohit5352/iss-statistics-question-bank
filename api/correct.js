/**
 * Vercel Serverless API: Update answer in answers.js via GitHub API
 * Requires: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO env vars
 */

function applyCorrection(lines, paper, section, year, qNumber, newAnswer) {
  const targetPath = [paper, section, year];
  const pathStack = [];
  const resultLines = [];
  let replaced = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match "key": { - entering a block
    const keyMatch = line.match(/^(\s*)"([^"]+)"\s*:\s*\{/);
    if (keyMatch) {
      const indent = keyMatch[1].length;
      const key = keyMatch[2];
      while (pathStack.length && pathStack[pathStack.length - 1][0] >= indent) {
        pathStack.pop();
      }
      pathStack.push([indent, key]);
    }

    // Match "NN": "x" - question line
    const qMatch = line.match(/^(\s*)"(\d+)"\s*:\s*"([a-d])"/);
    if (qMatch && qMatch[2] === qNumber) {
      const pathKeys = pathStack.map((p) => p[1]);
      const last3 = pathKeys.slice(-3);
      if (last3.length === 3 && last3.every((k, i) => k === targetPath[i])) {
        const indent = qMatch[1];
        const num = qMatch[2];
        const rest = line.slice(qMatch[0].length);
        resultLines.push(`${indent}"${num}": "${newAnswer}"${rest}`);
        replaced = true;
        continue;
      }
    }

    // Pop on closing brace
    if (/^\s*\}/.test(line)) {
      const lineIndent = line.length - line.trimStart().length;
      while (pathStack.length && pathStack[pathStack.length - 1][0] >= lineIndent) {
        pathStack.pop();
      }
    }

    resultLines.push(line);
  }

  return replaced ? resultLines.join('\n') : null;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    return res.status(500).json({
      ok: false,
      error: 'Server misconfigured: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO required',
    });
  }

  let data;
  try {
    data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  // Support single { paper, section, year, q, answer } or batch { corrections: [...] }
  let corrections = [];
  if (Array.isArray(data.corrections) && data.corrections.length > 0) {
    corrections = data.corrections;
  } else if (data.paper && data.section && data.year && data.q != null) {
    corrections = [{ paper: data.paper, section: data.section, year: data.year, q: data.q, answer: data.answer }];
  }

  if (corrections.length === 0) {
    return res.status(400).json({ ok: false, error: 'Missing params' });
  }

  // Validate and normalize
  const valid = [];
  for (const c of corrections) {
    const answer = String(c.answer || '').toLowerCase();
    if (!['a', 'b', 'c', 'd'].includes(answer) || !c.paper || !c.section || !c.year || !String(c.q)) continue;
    valid.push({ paper: c.paper, section: c.section, year: c.year, q: String(c.q), answer });
  }

  if (valid.length === 0) {
    return res.status(400).json({ ok: false, error: 'No valid corrections' });
  }

  // Dedupe: same question → keep latest
  const byKey = new Map();
  for (const c of valid) {
    byKey.set(`${c.paper}|${c.section}|${c.year}|${c.q}`, c);
  }
  const unique = [...byKey.values()];

  try {
    // 1. Get current file from GitHub
    const getRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/answers.js`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getRes.ok) {
      const err = await getRes.text();
      return res.status(500).json({ ok: false, error: `GitHub GET failed: ${err}` });
    }

    const fileData = await getRes.json();
    let content = Buffer.from(
      (fileData.content || '').replace(/\n/g, ''),
      'base64'
    ).toString('utf-8');
    let sha = fileData.sha;

    // 2. Apply all corrections (each uses output of previous)
    for (const c of unique) {
      const lines = content.split(/\r?\n/);
      const newContent = applyCorrection(lines, c.paper, c.section, c.year, c.q, c.answer);
      if (!newContent) {
        return res.status(404).json({ ok: false, error: `Question ${c.q} not found in answers.js` });
      }
      content = newContent;
    }

    // 3. Single commit for all corrections
    const msgParts = unique.map((c) => `${c.paper}/${c.section}/${c.year} Q${c.q}→${c.answer}`);
    const message = unique.length === 1
      ? `Correct answer: ${msgParts[0]}`
      : `Correct answers (${unique.length}): ${msgParts.join(', ')}`;

    const putRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/answers.js`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          content: Buffer.from(content, 'utf-8').toString('base64'),
          sha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      return res.status(500).json({ ok: false, error: `GitHub PUT failed: ${err}` });
    }

    return res.status(200).json({ ok: true, count: unique.length });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e.message || e) });
  }
}
