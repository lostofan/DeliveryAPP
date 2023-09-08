import React from 'react';
import styles from './RestaurantItem.module.scss';
interface RestaurantProps {
  name: string;
  address: string;
  kitchens: {
    kitchenName: string;
  }[];
  img: string;
}

export const RestaurantItem: React.FC<RestaurantProps> = ({ img, name, address, kitchens }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img_wrapper}>
        <img src={img} alt="" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.address}>{address}</h4>
        <div className={styles.kitchen_block}>
          {kitchens.map(({ kitchenName }, idx) => (
            <div key={idx} className={styles.kitchen_item}>
              <img
                className={styles.kitchen_ico}
                src={`imgs/${kitchenName.toLowerCase()}.png`}
                alt=""
              />
              {kitchenName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
