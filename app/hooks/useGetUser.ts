import { useEffect, useState } from 'react';

export function useGetUser(id: number | string) {
  const [user, setUser] = useState({});

  async function getUser() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser/${id}`);

    setUser(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);
  return user;
}
