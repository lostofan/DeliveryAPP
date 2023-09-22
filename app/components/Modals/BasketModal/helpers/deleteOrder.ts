export const deleteOrder = async (
  id: number,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  hideElement(e);

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrders`, {
    method: 'DELETE',
    body: JSON.stringify({
      id: id,
    }),
  });
};

const hideElement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const eventTarget = e.target as HTMLElement;
  const parentElement = eventTarget.parentElement as HTMLDivElement;
  parentElement.remove();
};
