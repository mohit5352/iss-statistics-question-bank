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

  const paper = data.paper;
  const section = data.section;
  const year = data.year;
  const q = String(data.q || '');
  const answer = String(data.answer || '').toLowerCase();

  if (!['a', 'b', 'c', 'd'].includes(answer)) {
    return res.status(400).json({ ok: false, error: 'Invalid answer' });
  }
  if (!paper || !section || !year || !q) {
    return res.status(400).json({ ok: false, error: 'Missing params' });
  }

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
    const content = Buffer.from(
      (fileData.content || '').replace(/\n/g, ''),
      'base64'
    ).toString('utf-8');
    const sha = fileData.sha;
    const lines = content.split(/\r?\n/);

    // 2. Apply correction
    const newContent = applyCorrection(lines, paper, section, year, q, answer);
    if (!newContent) {
      return res.status(404).json({ ok: false, error: 'Question not found in answers.js' });
    }

    // 3. Push updated file to GitHub
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
          message: `Correct answer: ${paper}/${section}/${year} Q${q} → ${answer}`,
          content: Buffer.from(newContent, 'utf-8').toString('base64'),
          sha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      return res.status(500).json({ ok: false, error: `GitHub PUT failed: ${err}` });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e.message || e) });
  }
}
