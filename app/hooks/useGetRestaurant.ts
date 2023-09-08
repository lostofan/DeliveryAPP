import { useEffect, useState } from 'react';

export function useGetRestaurant(id: number) {
  const [restaurant, setRestaurant] = useState({});

  async function getRestaurant() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getRestaurant/${id}`);

    setRestaurant(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getRestaurant();
    })();
  }, []);
  return restaurant;
}
