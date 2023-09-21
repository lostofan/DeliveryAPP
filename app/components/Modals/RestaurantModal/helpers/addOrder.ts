export const addOrder = async (id: number, price: number, userId: number) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrders`, {
    method: 'POST',
    body: JSON.stringify({
      price: price,
      userId: userId,
      menuItemId: id,
    }),
  });
};
