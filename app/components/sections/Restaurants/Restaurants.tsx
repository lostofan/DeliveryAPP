'use client';
import React from 'react';
import { useGetRestaurants } from '../../../hooks/useGetRestaurants';
import styles from './Restaurants.module.scss';
import { RestaurantItem } from '../../RestaurantItem';
import { useAppSelector } from '@/app/Redux/hook';
import { selectFilter } from '@/app/Redux/Slices/selectorSlice';
import { ModalPortal } from '../../Modals/ModalPortal/ModalPortal';

export const Restaurants = () => {
  const array = useAppSelector(selectFilter).toString();
  const restaurants = useGetRestaurants(array);

  return (
    <section className={styles.root} id="restaurants">
      <h2 className={styles.title}>Restaurants</h2>
      <div className={styles.restaurantsList}>
        {restaurants.map(({ id, name, address, kitchens, img }) => (
          <ModalPortal key={id} id={id} type={'menu'}>
            <RestaurantItem name={name} address={address} kitchens={kitchens} img={img} />
          </ModalPortal>
        ))}
      </div>
    </section>
  );
};
