import React from 'react';
import styles from './BurgerMenu.module.scss';

import Link from 'next/link';

export const BurgerMenu = () => {
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link href="/#restaurants">Restaurants</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/#promo">Deals</Link>
        </li>
        <li className={`${styles.menu_item} ${styles.orders}`}>
          <Link href="/#">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};
