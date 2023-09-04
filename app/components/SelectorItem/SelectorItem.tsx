import React from 'react';
import styles from './SelectorItem.module.scss';
import Image from 'next/image';

interface IDoFilter {
  doFilter: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => void;
  name: string;
}

export const SelectorItem: React.FC<IDoFilter> = ({ doFilter, name }) => {
  return (
    <button onClick={(e) => doFilter(e, name)} className={`${styles.item}`}>
      <Image src={`/imgs/${name.toLowerCase()}.png`} width={24} height={24} alt={name} />
      <span>{name}</span>
    </button>
  );
};
