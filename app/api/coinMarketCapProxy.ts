import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const API_KEY = process.env.CMC_API_KEY!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
