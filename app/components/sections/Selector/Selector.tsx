'use client';
import React from 'react';
import styles from './Selector.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/Redux/hook';
import {
  addSelector,
  selectKitchens,
  subSelector,
  selectFilter,
} from '@/app/Redux/Slices/selectorSlice';
import { SelectorItem } from '../../SelectorItem/SelectorItem';

export const Selector = () => {
  const dispatch = useAppDispatch();
  const kitchens = useAppSelector(selectKitchens);
  const filter = useAppSelector(selectFilter);

  const doFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
    event.currentTarget.classList.toggle(styles.item_active);
    if (filter.includes(name)) {
      dispatch(subSelector({ name: name }));
    } else {
      dispatch(addSelector({ name: name }));
    }
  };
  return (
    <section className={styles.root}>
      {kitchens.map((kitchen, idx) => (
        <SelectorItem key={idx} doFilter={doFilter} name={kitchen} />
      ))}
    </section>
  );
};
