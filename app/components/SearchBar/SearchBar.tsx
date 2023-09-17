import React from 'react';
import Image from 'next/image';
import search from 'public/imgs/search.svg';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input type="search" name="search" placeholder="Search" id="" />
      <button>
        <Image src={search} alt="search" />
      </button>
    </div>
  );
};
