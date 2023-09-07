import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import logo from 'public/imgs/logo.png';
import search from 'public/imgs/search.svg';
import { Navbar } from '../../Navbar';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo_side}>
        <Image className={styles.logo} src={logo} alt="LOGO" />
        <div className={styles.search}>
          <input type="search" name="search" placeholder="Search" id="" />
          <button>
            <Image src={search} alt="search" />
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
