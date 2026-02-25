/**
 * Vercel Serverless API: Validate admin login
 * Requires: ADMIN_USERNAME, ADMIN_PASSWORD env vars
 */
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

  const expectedUser = process.env.ADMIN_USERNAME || '';
  const expectedPass = process.env.ADMIN_PASSWORD || '';

  if (!expectedUser || !expectedPass) {
    return res.status(500).json({
      ok: false,
      error: 'Server misconfigured: ADMIN_USERNAME and ADMIN_PASSWORD required',
    });
  }

  let data;
  try {
    data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  const user = (data.username || '').trim();
  const pass = data.password || '';

  if (user === expectedUser && pass === expectedPass) {
    const adminName = process.env.ADMIN_NAME || expectedUser || 'Admin';
    return res.status(200).json({ ok: true, adminName });
  }
  return res.status(401).json({ ok: false, error: 'Invalid username or password' });
}
