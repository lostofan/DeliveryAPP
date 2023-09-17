'use client';
import React from 'react';
import styles from './RestaurantModal.module.scss';
import Image from 'next/image';
import { useGetRestaurant } from '@/app/hooks/useGetRestaurant';
import { IRestaurant, IRestaurantModalProps } from './RestaurantModal.types';

export const RestaurantModal: React.FC<IRestaurantModalProps> = ({ onClose, id }) => {
  const { name, address, img, menu }: IRestaurant = useGetRestaurant(id);

  return (
    <div className={styles.modal}>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
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
