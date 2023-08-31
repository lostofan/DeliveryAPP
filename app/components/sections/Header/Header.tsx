import React from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo_side}>
        <img className={styles.logo} src="imgs/logo.png" alt="" />
        <div className={styles.search}>
          <input type="search" name="search" placeholder="Search" id="" />
          <img src="imgs/search.svg" alt="" />
        </div>
      </div>
      <Navbar />
    </header>
  );
};
