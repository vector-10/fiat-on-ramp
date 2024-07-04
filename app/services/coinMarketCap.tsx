const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const API_KEY = process.env.COIN_MARKET_API; 

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
  
  interface FetchCryptoPricesResponse {
    data: Coin[];
  }
  
  export const fetchCryptoPrices = async (): Promise<FetchCryptoPricesResponse | null> => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": API_KEY,
        } as HeadersInit,
      });  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }  
      const data = await response.json();
      return data as FetchCryptoPricesResponse;
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      console.log(error)
      return null;
    }
  };
