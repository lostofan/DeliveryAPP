import { useEffect, useState } from 'react';

export function useUpdateUser(id: number, firstName?: string, lastName?: string) {
  const [user, setUser] = useState({});

  async function updateUser() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });

    setUser(await res.json());
  }

  useEffect(() => {
    (async () => {
      await updateUser();
    })();
  }, []);
  return user;
}
