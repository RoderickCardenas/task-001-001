// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getHosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q, cursor } = req.query

  if (typeof q !== 'string') {
    res.status(400).json({ error: 'Invalid query parameter' })
    return
  }

  const apiId = '95705197-2eb4-447a-9731-72eb9e8a4673'
  const apiSecret = 'vj5ZtMvxCGF8hkLpC0EVS7a2xtWxAoCN'

  const authorization = `Basic ${Buffer.from(`${apiId}:${apiSecret}`).toString(
    'base64'
  )}`

  const baseUrl = `https://search.censys.io/api/v2/hosts/search?q=${encodeURIComponent(
    q
  )}`

  const finalUrl = cursor ? `${baseUrl}&cursor=${cursor}` : baseUrl

  try {
    const response = await fetch(finalUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: authorization,
      },
    })

    if (!response.ok) {
      res
        .status(response.status)
        .json({ error: `Censys API error: ${response.statusText}` })
      return
    }

    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    console.error('Fetch error:', error)
    res.status(500).json({ error: 'Failed to fetch data from Censys API' })
  }
}
