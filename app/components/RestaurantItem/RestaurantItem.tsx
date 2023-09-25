import React from 'react';
import styles from './RestaurantItem.module.scss';
interface RestaurantProps {
  name?: string;
  address?: string;
  kitchens?: {
    kitchenName: string;
  }[];
  img?: string;
  skeleton: boolean;
}

export const RestaurantItem: React.FC<RestaurantProps> = ({
  img,
  name,
  address,
  kitchens,
  skeleton,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.img_wrapper}>{img ? <img src={img} alt="" /> : false}</div>
      <div className={styles.info}>
        <h3 className={skeleton ? styles.skeletonName : styles.name}>{name}</h3>
        <h4 className={skeleton ? styles.skeletonAddress : styles.address}>{address}</h4>
        <div className={styles.kitchen_block}>
          {kitchens?.map(({ kitchenName }, idx) => (
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
