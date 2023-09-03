import { useEffect, useState } from 'react';
import { useAppSelector } from './Redux/hook';
import { selectFilter } from './Redux/Slices/selectorSlice';

export function useGetRestaurants(prop: string) {
  const [restaurants, setRestaurants] = useState([]);
  const array = useAppSelector(selectFilter);

  async function getRestaurants() {
    const res = await fetch(`http://localhost:3000/api/getRestaurants`, {
      headers: {
        xd: prop,
      },
    });
    setRestaurants(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getRestaurants();
    })();
  }, [array]);
  return restaurants;
}
