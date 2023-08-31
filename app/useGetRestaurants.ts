import { useEffect, useState } from 'react';

export function useGetRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  async function getRestaurants() {
    const res = await fetch(`http://localhost:3000/api/getRestaurants`);
    setRestaurants(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getRestaurants();
    })();
  }, []);
  return restaurants;
}
