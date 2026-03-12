/**
 * Vercel Serverless API: Update revision notes in notes.js via GitHub API
 * Requires: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO env vars
 *
 * Accepts POST with { edits: [ { paper, section, sectionId, content, label, delete? } ] }
 */

function applyNoteUpdate(lines, paper, section, sectionId, newContent, label) {
  const targetPath = [paper, section];
  const pathStack = [];
  const resultLines = [];
  let replaced = false;
  let insideSectionsArray = false;
  let insideTargetId = false;
  let sectionsIndent = '';
  const isDelete = newContent === null;

  // Pre-pass: add first section to empty topic
  if (newContent !== null && label) {
    for (let idx = 0; idx < lines.length; idx++) {
      const l = lines[idx];
      if (!l.includes('"sections": []')) continue;

      // Inline: "comp": { "title": "...", "sections": [], "tips": "" }
      if (l.includes(`"${section}"`) && l.includes('"sections": []')) {
        const baseMatch = l.match(/^(\s*)/);
        const base = baseMatch ? baseMatch[1] : '';
        const titleM = l.match(/"title"\s*:\s*"([^"]*)"/);
        const tipsM = l.match(/"tips"\s*:\s*"([^"]*)"/);
        const title = titleM ? titleM[1] : section.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const tipsVal = tipsM ? tipsM[1] : '';
        const jsonContent = JSON.stringify(newContent);
        const block = base + `"${section}": {\n` +
          base + '    "title": ' + JSON.stringify(title) + ',\n' +
          base + '    "sections": [\n' +
          base + '        {\n' +
          base + '            "id": "' + sectionId + '",\n' +
          base + '            "label": ' + JSON.stringify(label) + ',\n' +
          base + '            "content": ' + jsonContent + '\n' +
          base + '        }\n' +
          base + '    ],\n' +
          base + '    "tips": ' + JSON.stringify(tipsVal) + '\n' +
          base + '},\n';
        const blockLines = block.split('\n').filter(Boolean).map(s => s + '\n');
        lines.splice(idx, 1, ...blockLines);
        replaced = true;
        break;
      }

      // Multi-line: find parent topic by looking backwards
      const sectIndentMatch = l.match(/^(\s*)/);
      const sectIndent = sectIndentMatch ? sectIndentMatch[1].length : 0;
      for (let j = idx - 1; j >= 0; j--) {
        const prev = lines[j];
        const prevIndentMatch = prev.match(/^(\s*)/);
        const prevIndent = prevIndentMatch ? prevIndentMatch[1].length : 0;
        const keyM = prev.match(/^(\s*)"([^"]+)"\s*:\s*\{/);
        if (keyM && prevIndent < sectIndent) {
          const foundKey = keyM[2];
          if (foundKey === section) {
            const base = keyM[1];
            let title = section.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            let tipsVal = '';
            for (let k = j + 1; k < idx; k++) {
              const tm = lines[k].match(/"title"\s*:\s*"([^"]*)"/);
              if (tm) title = tm[1];
              const tpm = lines[k].match(/"tips"\s*:\s*"([^"]*)"/);
              if (tpm) tipsVal = tpm[1];
            }
            const jsonContent = JSON.stringify(newContent);
            const block = base + `"${section}": {\n` +
              base + '    "title": ' + JSON.stringify(title) + ',\n' +
              base + '    "sections": [\n' +
              base + '        {\n' +
              base + '            "id": "' + sectionId + '",\n' +
              base + '            "label": ' + JSON.stringify(label) + ',\n' +
              base + '            "content": ' + jsonContent + '\n' +
              base + '        }\n' +
              base + '    ],\n' +
              base + '    "tips": ' + JSON.stringify(tipsVal) + '\n' +
              base + '},\n';
            let endIdx = idx;
            for (let k = idx + 1; k < lines.length; k++) {
              const closeMatch = lines[k].match(/^\s*\},?\s*$/);
              const closeIndent = lines[k].match(/^(\s*)/);
              if (closeMatch && closeIndent && closeIndent[1].length === base.length) {
                endIdx = k;
                break;
              }
            }
            const blockLines = block.split('\n').filter(Boolean).map(s => s + '\n');
            lines.splice(j, endIdx - j + 1, ...blockLines);
            replaced = true;
          }
          break;
        }
        if (prevIndent < sectIndent && prev.trim() && !keyM) break;
      }
      if (replaced) break;
    }
  }

  // Main pass: path tracking and content replacement
  let i = 0;
  mainLoop: while (i < lines.length) {
    const line = lines[i];
    const indentMatch = line.match(/^(\s*)/);
    const currentIndent = indentMatch ? indentMatch[1].length : 0;

    if (line.trim() && !/^\s*[\}\]]/.test(line)) {
      while (pathStack.length && pathStack[pathStack.length - 1][0] >= currentIndent) {
        pathStack.pop();
      }
    }

    const keyMatch = line.match(/^(\s*)"([^"]+)"\s*:\s*([\{\[])/);
    if (keyMatch) {
      const indent = keyMatch[1].length;
      const key = keyMatch[2];
      pathStack.push([indent, key]);
      const pk = pathStack.map(p => p[1]);
      if (key === 'sections' && pk.length >= 3 && pk.slice(-3, -1).every((k, idx) => k === targetPath[idx])) {
        insideSectionsArray = true;
        sectionsIndent = keyMatch[1];
      }
    }

    if (insideSectionsArray && /^\s*\{/.test(line) && !replaced) {
      let j = i + 1;
      let foundId = null;
      while (j < lines.length && !/^\s*[\}\]]/.test(lines[j])) {
        const m = lines[j].match(/"id"\s*:\s*"([^"]+)"/);
        if (m) {
          foundId = m[1];
          break;
        }
        j++;
      }
      if (foundId === sectionId) {
        if (isDelete) {
          while (i < lines.length && !/^\s*\}/.test(lines[i])) i++;
          i++;
          if (i < lines.length && /^\s*,/.test(lines[i])) i++;
          replaced = true;
          continue mainLoop;
        }
        insideTargetId = true;
      }
    }

    const idMatch = line.match(/"id"\s*:\s*"([^"]+)"/);
    if (idMatch) {
      const pk = pathStack.map(p => p[1]);
      if (pk.length >= 3 && pk.slice(-3).join(',') === [paper, section, 'sections'].join(',') && idMatch[1] === sectionId) {
        insideTargetId = true;
      } else if (pk.length >= 3 && pk.slice(-3).join(',') === [paper, section, 'sections'].join(',')) {
        insideTargetId = false;
      }
    }

    const labelMatch = line.match(/^(\s*)"label"\s*:\s*(.*)$/);
    if (insideTargetId && labelMatch && label) {
      resultLines.push(labelMatch[1] + '"label": ' + JSON.stringify(label) + ',\n');
      i++;
      continue mainLoop;
    }

    const contentMatch = line.match(/^(\s*)"(content|tips)"\s*:\s*(.*)$/);
    if (contentMatch) {
      const matchType = contentMatch[2];
      let isTarget = false;
      if (matchType === 'content' && insideTargetId) isTarget = true;
      else if (matchType === 'tips' && sectionId === 'TIPS_PROPERTY') {
        const pk = pathStack.map(p => p[1]);
        if (pk.length >= 2 && pk.slice(-2).join(',') === [paper, section].join(',')) isTarget = true;
      }
      if (isTarget) {
        const indent = contentMatch[1];
        const rest = contentMatch[3];
        const jsonContent = JSON.stringify(newContent);
        if (rest.trim().startsWith('`')) {
          while (i < lines.length) {
            const firstBacktick = lines[i].indexOf('`');
            const idx = firstBacktick >= 0 ? lines[i].indexOf('`', firstBacktick + 1) : -1;
            if (idx !== -1) {
              const remainder = lines[i].slice(idx + 1);
              resultLines.push(indent + '"' + matchType + '": ' + jsonContent + remainder);
              i++;
              replaced = true;
              insideTargetId = false;
              continue mainLoop;
            }
            i++;
          }
        } else {
          const trail = rest.match(/([,\]\}]?\s*)$/);
          const remainder = trail ? trail[1] : '';
          resultLines.push(indent + '"' + matchType + '": ' + jsonContent + remainder + '\n');
        }
        replaced = true;
        insideTargetId = false;
        i++;
        continue mainLoop;
      }
    }

    if (insideSectionsArray && /^\s*\]/.test(line) && !replaced && label) {
      if (resultLines.length) {
        let k = resultLines.length - 1;
        while (k >= 0 && !resultLines[k].trim()) k--;
        if (k >= 0 && resultLines[k].includes('}') && !resultLines[k].includes('},')) {
          resultLines[k] = resultLines[k].replace('}', '},');
        }
      }
      const indent = sectionsIndent + '    ';
      const jsonContent = JSON.stringify(newContent);
      resultLines.push(indent + '{\n');
      resultLines.push(indent + '    "id": "' + sectionId + '",\n');
      resultLines.push(indent + '    "label": ' + JSON.stringify(label) + ',\n');
      resultLines.push(indent + '    "content": ' + jsonContent + '\n');
      resultLines.push(indent + '}\n');
      replaced = true;
    }

    if (/^\s*[\}\]]/.test(line)) {
      if (pathStack.length && currentIndent <= pathStack[pathStack.length - 1][0]) pathStack.pop();
      if (/^\s*\]/.test(line)) insideSectionsArray = false;
      insideTargetId = false;
    }

    resultLines.push(line);
    i++;
  }

  if (!replaced && !isDelete) return null;
  return resultLines.join('');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

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

  const edits = data.edits || [];
  if (!edits.length) return res.status(400).json({ ok: false, error: 'Missing edits' });

  const valid = edits.filter(e => e.paper && e.section && e.sectionId);

  try {
    const getRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/notes.js`,
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

    for (const e of valid) {
      const newContent = e.delete ? null : (e.content ?? '');
      const label = e.label || e.sectionId;
      const lines = content.split(/\r?\n/).map(l => l + '\n');
      const newContentStr = applyNoteUpdate(lines, e.paper, e.section, e.sectionId, newContent, label);
      if (!newContentStr && !e.delete) {
        return res.status(404).json({ ok: false, error: `Section "${e.sectionId}" not found in ${e.paper}/${e.section}` });
      }
      if (newContentStr) content = newContentStr;
    }

    const msgParts = valid.map(e => `${e.paper}/${e.section}/${e.sectionId}`);
    const message = valid.length === 1 ? `Update notes: ${msgParts[0]}` : `Update notes (${valid.length}): ${msgParts.join(', ')}`;

    const putRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/notes.js`,
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

    return res.status(200).json({ ok: true, count: valid.length });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e.message || e) });
  }
}
