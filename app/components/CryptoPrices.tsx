'use client';
import { useEffect, useState } from 'react';
import { fetchCryptoPrices } from '../services/coinMarketCap';

interface Coin {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
    };
  };
}

const CryptoPrices: React.FC = () => {
  const [prices, setPrices] = useState<Coin[]>([]);

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchCryptoPrices();
      if (data) {
        setPrices(data.data);
      }
    };

    getPrices();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      <ul>
        {prices.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quote.USD.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
