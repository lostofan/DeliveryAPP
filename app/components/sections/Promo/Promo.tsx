import React from 'react';
import styles from './Promo.module.scss';
import Image from 'next/image';

export const Promo = () => {
  return (
    <section className={styles.root} id="promo">
      <Image
        className={styles.promo_item}
        src="/imgs/promo.png"
        layout="responsive"
        width={520}
        height={188}
        alt=""
      />
      <Image
        className={styles.promo_item}
        src="/imgs/promo2.png"
        layout="responsive"
        width={520}
        height={188}
        alt=""
      />
    </section>
  );
};
