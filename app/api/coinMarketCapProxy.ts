import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const API_KEY = process.env.CMC_API_KEY!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API_KEY:', API_KEY); 
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': '2fde1e52-37b3-4172-8cf7-ea1e53137801',
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
