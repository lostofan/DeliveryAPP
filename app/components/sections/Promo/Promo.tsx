import React from 'react';
import styles from './Promo.module.scss';

export const Promo = () => {
  return (
    <section className={styles.root}>
      <img className={styles.promo_item} src="imgs/promo.png" alt="" />
      <img className={styles.promo_item} src="imgs/promo2.png" alt="" />
    </section>
  );
};
