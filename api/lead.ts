import type { VercelRequest, VercelResponse } from '@vercel/node'

// Proxies contact-form submissions to Pool Founder so the API key stays server-side.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.POOLFOUNDER_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  if (typeof req.body !== 'object' || req.body === null) {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  const upstream = await fetch('https://api.poolfounder.com/api/v1/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(req.body)
  })

  const data = await upstream.json().catch(() => null)
  return res.status(upstream.status).json(data ?? { error: 'Upstream error' })
}
