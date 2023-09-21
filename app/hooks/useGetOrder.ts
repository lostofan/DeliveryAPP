import { useEffect, useState } from 'react';

export function useGetOrder(id: number) {
  const [order, setOrder] = useState([]);

  async function getOrder() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrder/${id}`);

    setOrder(await res.json());
  }

  useEffect(() => {
    (async () => {
      await getOrder();
    })();
  }, []);
  return order;
}
