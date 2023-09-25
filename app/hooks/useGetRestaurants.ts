import { useEffect, useState } from 'react';
import { useAppSelector } from '../Redux/hook';
import { selectFilter } from '../Redux/Slices/selectorSlice';

export function useGetRestaurants(
  prop: string,
  setLoad: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const [restaurants, setRestaurants] = useState([]);
  const array = useAppSelector(selectFilter);

  async function getRestaurants() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getRestaurants`, {
      headers: {
        xd: prop,
      },
    });
    setRestaurants(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getRestaurants();
      setLoad(true);
    })();
  }, [array]);
  return restaurants;
}
