/**
 * Vercel Serverless API: Update explanation in explanations.js via GitHub API
 * Requires: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO env vars
 *
 * Accepts POST with { edits: [ { paper, section, year, q, note } ] }
 * or single { paper, section, year, q, note }.
 *
 * The explanations file stores values as template literals (backtick strings) to allow multiline content.
 */

function applyExplanationUpdate(lines, paper, section, year, qNumber, newNote) {
  const targetPath = [paper, section, year];
  const pathStack = [];
  const resultLines = [];
  let replaced = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Enter block: "key": {
    const keyMatch = line.match(/^(\s*)"([^"]+)"\s*:\s*\{/);
    if (keyMatch) {
      const indent = keyMatch[1].length;
      const key = keyMatch[2];
      while (pathStack.length && pathStack[pathStack.length - 1][0] >= indent) {
        pathStack.pop();
      }
      pathStack.push([indent, key]);
      resultLines.push(line);
      continue;
    }

    // Match a potential question line start: "NN": ...
    const qStartMatch = line.match(/^(\s*)"(\d+)"\s*:\s*(.*)$/);
    if (qStartMatch && qStartMatch[2] === qNumber) {
      const pathKeys = pathStack.map((p) => p[1]);
      const last3 = pathKeys.slice(-3);
      if (last3.length === 3 && last3.every((k, i) => k === targetPath[i])) {
        // We found the target question entry. Determine whether it's a single-line string or a template literal starting with `
        const indent = qStartMatch[1];
        let rest = qStartMatch[3];
        // If rest starts with a backtick, gather until closing backtick
        if (rest.trim().startsWith('`')) {
          // Determine if closing backtick is on same line
          const startIndex = line.indexOf('`');
          let j = i;
          let collected = line.slice(startIndex + 1) + '\n';
          let closed = false;
          // Search for unescaped closing backtick
          while (++j < lines.length) {
            const l = lines[j];
            // Find a backtick not preceded by a backslash
            for (let k = 0; k < l.length; k++) {
              if (l[k] === '`') {
                // Check preceding char for escape
                if (k > 0 && l[k-1] === '\\') continue;
                // closing found at lines[j], position k
                // Capture content up to k
                collected += l.slice(0, k);
                closed = true;
                // Keep remainder of the line (after closing backtick) to preserve trailing comma etc.
                const remainder = l.slice(k + 1);
                // Replace with new backtick string and append remainder
                const escaped = String(newNote).replace(/`/g, '\\`');
                resultLines.push(indent + '"' + qNumber + '": `' + escaped + '`' + remainder);
                i = j; // advance outer loop past closing delimiter
                replaced = true;
                break;
              }
            }
            if (closed) break;
            collected += l + '\n';
          }
          if (!closed) {
            // Malformed file (no closing backtick) — fail
            return null;
          }
          continue;
        } else {
          // Single-line double-quoted string or other expression — replace with template literal
          // Preserve trailing comma or comment after the value
          const trailingMatch = rest.match(/^(["'`]?.*?["'`]?)(\s*(,|\}|\/\/.*)*)$/);
          const remainder = trailingMatch ? trailingMatch[2] : '';
          const escaped = String(newNote).replace(/`/g, '\\`');
          resultLines.push(indent + '"' + qNumber + '": `' + escaped + '`' + remainder);
          replaced = true;
          continue;
        }
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

  let edits = [];
  if (Array.isArray(data.edits) && data.edits.length > 0) {
    edits = data.edits;
  } else if (data.paper && data.section && data.year && data.q != null) {
    edits = [{ paper: data.paper, section: data.section, year: data.year, q: data.q, note: data.note }];
  }

  if (edits.length === 0) {
    return res.status(400).json({ ok: false, error: 'Missing params' });
  }

  // Validate and normalize
  const valid = [];
  for (const e of edits) {
    if (!e.paper || !e.section || !e.year || e.q == null) continue;
    valid.push({ paper: e.paper, section: e.section, year: e.year, q: String(e.q), note: String(e.note || '') });
  }

  if (valid.length === 0) {
    return res.status(400).json({ ok: false, error: 'No valid edits' });
  }

  // Dedupe: same question -> keep latest
  const byKey = new Map();
  for (const c of valid) {
    byKey.set(`${c.paper}|${c.section}|${c.year}|${c.q}`, c);
  }
  const unique = [...byKey.values()];

  try {
    // 1. Get current explanations.js from GitHub
    const getRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/explanations.js`,
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
    let content = Buffer.from((fileData.content || '').replace(/\n/g, ''), 'base64').toString('utf-8');
    let sha = fileData.sha;

    // 2. Apply all edits (each uses output of previous)
    for (const c of unique) {
      const lines = content.split(/\r?\n/);
      const newContent = applyExplanationUpdate(lines, c.paper, c.section, c.year, c.q, c.note);
      if (!newContent) {
        return res.status(404).json({ ok: false, error: `Question ${c.q} not found in explanations.js` });
      }
      content = newContent;
    }

    // 3. Single commit for all edits
    const msgParts = unique.map((c) => `${c.paper}/${c.section}/${c.year} Q${c.q}`);
    const message = unique.length === 1 ? `Update explanation: ${msgParts[0]}` : `Update explanations (${unique.length}): ${msgParts.join(', ')}`;

    const putRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/explanations.js`,
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
