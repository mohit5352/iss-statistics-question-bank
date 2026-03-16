/**
 * Vercel Serverless API: Update question edit in question_edits.js via GitHub API
 * Requires: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO env vars
 *
 * Accepts POST with { edits: [ { paper, section, year, q, text, topic, options } ] }
 * or single { paper, section, year, q, text, topic, options }.
 *
 * Each edit stores: { text: string, topic: string, options: [{label, text}, ...] }
 * Stored as JSON string in question_edits.js.
 */

function applyQuestionEdit(obj, paper, section, year, qNumber, editPayload) {
  if (!obj[paper]) obj[paper] = {};
  if (!obj[paper][section]) obj[paper][section] = {};
  if (!obj[paper][section][year]) obj[paper][section][year] = {};
  const payload = {
    text: String(editPayload.text || ''),
    topic: String(editPayload.topic || ''),
    options: Array.isArray(editPayload.options)
      ? editPayload.options.map((o) => ({
          label: String(o.label || '').toLowerCase().replace(/[^a-d]/g, '') || 'a',
          text: String(o.text || ''),
        }))
      : [],
  };
  if (payload.options.length < 4) {
    while (payload.options.length < 4) {
      payload.options.push({ label: String.fromCharCode(97 + payload.options.length), text: '' });
    }
  }
  obj[paper][section][year][String(qNumber)] = JSON.stringify(payload);
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
    edits = [{
      paper: data.paper,
      section: data.section,
      year: data.year,
      q: data.q,
      text: data.text,
      topic: data.topic,
      options: data.options,
    }];
  }

  if (edits.length === 0) {
    return res.status(400).json({ ok: false, error: 'Missing params' });
  }

  const valid = [];
  for (const e of edits) {
    if (!e.paper || !e.section || !e.year || e.q == null) continue;
    valid.push({
      paper: e.paper,
      section: e.section,
      year: String(e.year),
      q: String(e.q),
      text: e.text,
      topic: e.topic,
      options: e.options,
    });
  }

  if (valid.length === 0) {
    return res.status(400).json({ ok: false, error: 'No valid edits' });
  }

  const byKey = new Map();
  for (const e of valid) {
    byKey.set(`${e.paper}|${e.section}|${e.year}|${e.q}`, e);
  }
  const unique = [...byKey.values()];

  try {
    const getRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/question_edits.js`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    let content;
    let sha;

    if (getRes.ok) {
      const fileData = await getRes.json();
      content = Buffer.from(
        (fileData.content || '').replace(/\n/g, ''),
        'base64'
      ).toString('utf-8');
      sha = fileData.sha;
    } else if (getRes.status === 404) {
      content = 'const QUESTION_EDITS = {};';
      sha = null;
    } else {
      const err = await getRes.text();
      return res.status(500).json({ ok: false, error: `GitHub GET failed: ${err}` });
    }

    const match = content.match(/const\s+QUESTION_EDITS\s*=\s*(\{[\s\S]*\})\s*;/);
    let obj = {};
    if (match) {
      try {
        obj = JSON.parse(match[1]);
      } catch (_) {
        obj = {};
      }
    }

    for (const e of unique) {
      applyQuestionEdit(obj, e.paper, e.section, e.year, e.q, {
        text: e.text,
        topic: e.topic,
        options: e.options,
      });
    }

    const newContent = 'const QUESTION_EDITS = ' + JSON.stringify(obj, null, 2) + ';\n';

    const putRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/question_edits.js`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: unique.length === 1
            ? `Edit question: ${unique[0].paper}/${unique[0].section}/${unique[0].year} Q${unique[0].q}`
            : `Edit questions (${unique.length})`,
          content: Buffer.from(newContent, 'utf-8').toString('base64'),
          ...(sha && { sha }),
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
