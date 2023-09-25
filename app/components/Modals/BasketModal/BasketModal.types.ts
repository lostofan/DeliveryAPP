export interface IOrder {
  id: number;
  quantity: number;
  price: number;
  menuItem: {
    id: number;
    name: string;
    img: string;
  };
}
