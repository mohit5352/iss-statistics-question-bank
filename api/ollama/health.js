/**
 * Vercel: GET Ollama /api/tags via OLLAMA_HOST or OLLAMA_BASE_URL.
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.status(200).end();
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const base = process.env.OLLAMA_HOST || process.env.OLLAMA_BASE_URL;
  if (!base) {
    return res.status(200).json({
      ok: false,
      configured: false,
      error: 'OLLAMA_HOST not set — chat works only when Ollama is reachable from Vercel.',
    });
  }

  const url = `${String(base).replace(/\/$/, '')}/api/tags`;
  try {
    const r = await fetch(url, { method: 'GET' });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      return res.status(502).json({ ok: false, configured: true, error: JSON.stringify(data) });
    }
    return res.status(200).json({ ok: true, configured: true, ollama: data });
  } catch (e) {
    return res.status(502).json({ ok: false, configured: true, error: String(e.message || e) });
  }
}
