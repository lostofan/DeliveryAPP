'use client';
import React from 'react';
import { useGetRestaurants } from '../../../useGetRestaurants';
import styles from './Restaurants.module.scss';
import { RestaurantItem } from '../../Navbar/RestaurantItem';
import { useAppSelector } from '@/app/Redux/hook';
import { selectFilter } from '@/app/Redux/Slices/selectorSlice';

export const Restaurants = () => {
  const array = useAppSelector(selectFilter).toString();
  const restaurants = useGetRestaurants(array);

  return (
    <section className={styles.root} id="#restaurants">
      <p>{array}</p>
      <h2 className={styles.title}>Restaurants</h2>
      <div className={styles.restaurantsList}>
        {restaurants.map(({ id, name, address, kitchens, img }) => (
          <RestaurantItem key={id} name={name} address={address} kitchens={kitchens} img={img} />
        ))}
      </div>
    </section>
  );
};
