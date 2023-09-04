import React from 'react';
import styles from './ModalRestaurant.module.scss';
import Image from 'next/image';

interface IModalRestaurantProps {
  onClose: () => void;
  img: string;
  name: string;
  address: string;
}

export const ModalRestaurant: React.FC<IModalRestaurantProps> = ({
  onClose,
  img,
  name,
  address,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <div className={styles.header}>
          <img className={styles.image} src={img} alt="" />
          <div className={styles.title}>{name}</div>
          <div className={styles.address}>{address}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.menuCategory}>
            <h3 className={styles.categoryTitle}>PROMO</h3>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>{`1499 $`}</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>1499</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>1499</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>1499</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>1499</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
            </div>
          </div>
          <div className={styles.menuCategory}>
            <h3 className={styles.categoryTitle}>SOUP</h3>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <Image src="/imgs/avatar.png" alt="food" width={200} height={150}></Image>
                <div className={styles.price}>1499</div>
                <div className={styles.titleMenu}>xdxd</div>
                <button className={styles.addBtn}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
