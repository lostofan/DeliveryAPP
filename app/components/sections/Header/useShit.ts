import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { useEffect, useState } from 'react';

export function useShit() {
  const [shit, setShit] = useState({});

  async function getRestaurant() {
    const isAuth = await getServerSession(authOptions);
    console.log(isAuth);
    setShit(isAuth?.user);
    console.log(shit);
  }

  useEffect(() => {
    (async () => {
      await getRestaurant();
    })();
  }, []);
  return shit;
}
