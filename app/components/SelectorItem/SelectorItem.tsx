import React from 'react';
import styles from './SelectorItem.module.scss';
import Image from 'next/image';
import { IDoFilter } from './SelectorItem.types';

export const SelectorItem: React.FC<IDoFilter> = ({ doFilter, name }) => {
  return (
    <button onClick={(e) => doFilter(e, name)} className={`${styles.item}`}>
      <Image src={`/imgs/${name.toLowerCase()}.png`} width={24} height={24} alt={name} />
      <span>{name}</span>
    </button>
  );
};
