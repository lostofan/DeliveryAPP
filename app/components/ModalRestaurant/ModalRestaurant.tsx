'use client';
import React from 'react';
import styles from './ModalRestaurant.module.scss';
import Image from 'next/image';
import { useGetRestaurant } from '@/app/hooks/useGetRestaurant';

interface IModalRestaurantProps {
  onClose: () => void;
  id: number;
}
interface IRestaurant {
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
export const ModalRestaurant: React.FC<IModalRestaurantProps> = ({ onClose, id }) => {
  const { name, address, img, menu }: IRestaurant = useGetRestaurant(id);

  return (
    <div className={styles.modal}>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      <div className={styles.header}>
        <img className={styles.image} src={img} alt="" />
        <div className={styles.title}>{name}</div>
        <div className={styles.address}>{address}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.menuCategory}>
          <h3 className={styles.categoryTitle}>FOOD</h3>
          <div className={styles.menuList}>
            {menu
              ? menu[0].menuItems.map(({ id, name, price, img }) => (
                  <div key={id} className={styles.menuItem}>
                    <img src={img} alt="food"></img>
                    <div className={styles.price}>{`${price} $`}</div>
                    <div className={styles.titleMenu}>{name}</div>
                    <button className={styles.addBtn}>ADD{id}</button>
                  </div>
                ))
              : false}
          </div>
        </div>
      </div>
    </div>
  );
};
