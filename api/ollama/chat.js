/**
 * Vercel: stream POST JSON to Ollama /api/chat (browser calls same-origin /api/ollama/chat).
 * Set OLLAMA_HOST or OLLAMA_BASE_URL to a reachable Ollama base URL.
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const base = process.env.OLLAMA_HOST || process.env.OLLAMA_BASE_URL;
  if (!base) {
    return res.status(503).json({
      ok: false,
      error:
        'Ollama not configured. Set OLLAMA_HOST to your Ollama base URL (e.g. Tailscale IP or Cloudflare tunnel).',
    });
  }

  let payload = req.body;
  if (Buffer.isBuffer(payload)) {
    try {
      payload = JSON.parse(payload.toString('utf8') || '{}');
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON' });
    }
  }
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload || '{}');
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON' });
    }
  }
  if (!payload || typeof payload !== 'object') {
    return res.status(400).json({ ok: false, error: 'Expected JSON body' });
  }
  if (!Array.isArray(payload.messages)) {
    return res.status(400).json({ ok: false, error: 'messages array required' });
  }

  const out = { ...payload, stream: true };
  const url = `${String(base).replace(/\/$/, '')}/api/chat`;

  let ores;
  try {
    ores = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(out),
    });
  } catch (e) {
    return res.status(502).json({ ok: false, error: String(e.message || e) });
  }

  if (!ores.ok) {
    const t = await ores.text();
    const code = ores.status >= 400 && ores.status < 600 ? ores.status : 502;
    return res.status(code).json({ ok: false, error: t || ores.statusText });
  }

  res.setHeader('Content-Type', ores.headers.get('content-type') || 'application/x-ndjson');
  res.setHeader('Cache-Control', 'no-store');

  if (!ores.body) {
    return res.status(502).json({ ok: false, error: 'Empty response from Ollama' });
  }

  const reader = ores.body.getReader();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(Buffer.from(value));
  }
  res.end();
}
