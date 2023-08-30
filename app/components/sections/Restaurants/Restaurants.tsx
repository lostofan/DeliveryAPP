'use client';
import React from 'react';
import { useGetRestaurants } from '../../../useGetRestaurants';
import styles from './Restaurants.module.scss';

export const Restaurants = () => {
  const restaurants: {
    id: number;
    name: string;
    address: string;
    kitchens: {
      kitchenName: string;
    }[];
    img: string;
  }[] = useGetRestaurants();
  return (
    <>
      {restaurants.map(({ id, name, address, kitchens, img }) => (
        <div key={id} className={styles.root}>
          <div className={styles.img_wrapper}>
            <img src={img} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.address}>{address}</h4>
            <div className={styles.kitchen_block}>
              {kitchens.map(({ kitchenName }, idx) => (
                <div key={idx} className={styles.kitchen_item}>
                  {kitchenName}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
