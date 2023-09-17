import React from 'react';
import styles from './BurgerButton.module.scss';

export const BurgerButton = () => {
  return (
    <div className={styles.root}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
