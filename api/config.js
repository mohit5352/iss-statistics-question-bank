/**
 * Vercel Serverless API: Public config (contact details for login page)
 * Requires: CONTACT_EMAIL env var (e.g. "your.email@example.com")
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const contactDetails = process.env.CONTACT_EMAIL || 'Contact admin for access';
  return res.status(200).json({ contactDetails });
}
