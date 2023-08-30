import React from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className="logo">
        <img src="" alt="" />
        <div className="search">Search</div>
      </div>
      <Navbar />
    </header>
  );
};
