import React from 'react';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>Restaurants</li>
        <li className={styles.menu_item}>Deals</li>
        <li className={styles.menu_item}>My orders</li>
        <li className={styles.menu_item}></li>
        <li className={styles.menu_item}></li>
      </ul>
    </nav>
  );
};
