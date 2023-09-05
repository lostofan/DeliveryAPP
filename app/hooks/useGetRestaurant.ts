import { useEffect, useState } from 'react';

export function useGetRestaurant(id: number) {
  const [restaurant, setRestaurant] = useState({});

  async function getRestaurant() {
    const res = await fetch(`http://localhost:3000/api/getRestaurant/${id}`);

    setRestaurant(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getRestaurant();
    })();
  }, []);
  return restaurant;
}
