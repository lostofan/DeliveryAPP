'use client';
import React from 'react';
import styles from './Selector.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/Redux/hook';
import { addFilter, selectFilter } from '@/app/Redux/Slices/selectorSlice';

export const Selector = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectFilter);

  const doFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
    event.currentTarget.classList.toggle(styles.item_active);
    console.log('Now>>>' + state);
    dispatch(addFilter({ name: name }));
    console.log('Then>>' + state);
  };
  return (
    <section className={styles.root}>
      <button onClick={(e) => doFilter(e, 'Pizza')} className={`${styles.item}`}>
        <img src="imgs/pizza.png" alt="" />
        <span>Pizza</span>
      </button>
      <button onClick={(e) => doFilter(e, 'Burger')} className={`${styles.item}`}>
        <img src="imgs/burger.png" alt="" />
        <span>Burger</span>
      </button>
      <button onClick={(e) => doFilter(e, 'BBQ')} className={`${styles.item}`}>
        <img src="imgs/bbq.png" alt="" />
        <span>BBQ</span>
      </button>
      <button onClick={(e) => doFilter(e, 'Sushi')} className={`${styles.item}`}>
        <img src="imgs/sushi.png" alt="" />
        <span>Sushi</span>
      </button>
      <button onClick={(e) => doFilter(e, 'Vegan')} className={`${styles.item}`}>
        <img src="imgs/vegan.png" alt="" />
        <span>Vegan</span>
      </button>
      <button onClick={(e) => doFilter(e, 'Desserts')} className={`${styles.item}`}>
        <img src="imgs/desserts.png" alt="" />
        <span>Desserts</span>
      </button>
    </section>
  );
};
