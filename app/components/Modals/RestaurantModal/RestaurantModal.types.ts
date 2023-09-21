export interface IRestaurantModalProps {
  id: number;
}
export interface IRestaurant {
  id?: number;
  name?: string;
  address?: string;
  img?: string;
  menu?: IMenu[];
}
interface IMenu {
  menuItems: IMenuItem[];
}
interface IMenuItem {
  id: number;
  name: string;
  price: number;
  img: string;
  menuId: number;
}
