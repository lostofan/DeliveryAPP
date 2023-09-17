import React from 'react';
import styles from './BasketModal.module.scss';
interface ProfileModal {
  onClose: () => void;
}
export const BasketModal: React.FC<ProfileModal> = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      <p className={styles.title}>ORDERS</p>
      <div className={styles.orders}>
        {!false ? (
          <p>EMPTY</p>
        ) : (
          <ul className={styles.ordersList}>
            <li className={styles.ordersItem}>sd</li>
            <li className={styles.ordersItem}>sd</li>
            <li className={styles.ordersItem}>sd</li>
          </ul>
        )}
      </div>
    </div>
  );
};
