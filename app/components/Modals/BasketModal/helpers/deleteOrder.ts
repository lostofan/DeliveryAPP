export const deleteOrder = async (id: number) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrders`, {
    method: 'DELETE',
    body: JSON.stringify({
      id: id,
    }),
  });
};
