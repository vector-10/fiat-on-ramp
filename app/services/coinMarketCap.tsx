// Now to fetch data from the backend route in /api
export const fetchCryptoPrices = async () => {
  try {
    const response = await fetch('/api/coinMarketCapProxy', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    //set pull the returned data from json
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    return null;
  }
};
