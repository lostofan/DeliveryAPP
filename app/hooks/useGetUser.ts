import { useEffect, useState } from 'react';

export function useGetUser(id: number) {
  const [user, setUser] = useState({});

  async function getUser() {
    const res = await fetch(`http://localhost:3000/api/getUser/${id}`);

    setUser(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);
  return user;
}
