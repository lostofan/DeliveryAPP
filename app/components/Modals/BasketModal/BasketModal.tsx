import React, { useEffect } from 'react';
import styles from './BasketModal.module.scss';
import { useGetOrder } from '@/app/hooks/useGetOrder';
import { deleteOrder } from './helpers/deleteOrder';
import { useSession } from 'next-auth/react';

interface ProfileModal {
  onClose: () => void;
}
interface IOrder {
  id: number;
  quantity: number;
  price: number;
  menuItem: {
    id: number;
    name: string;
    img: string;
  };
}

export const BasketModal: React.FC<ProfileModal> = ({ onClose }) => {
  const session = useSession();
  const orders = useGetOrder(session.data?.user.id);

  return (
    <div className={styles.modal}>
      <p className={styles.title}>ORDERS</p>
      <div className={styles.orders}>
        {!orders.length ? (
          <p className={styles.empty}>EMPTY</p>
        ) : (
          <ul className={styles.ordersList}>
            {orders.map(({ id, quantity, price, menuItem }: IOrder, idx) => (
              <li key={idx} className={styles.ordersItem}>
                <img className={styles.img} src={menuItem.img} alt="" />
                <div className={styles.orderInfo}>
                  <p className={styles.name}>{menuItem.name}</p>
                  <p className={styles.quantity}>Quantity: {quantity + 'x'}</p>
                  <p className={styles.price}>{price + '$'}</p>
                </div>

                <button className={styles.deleteBtn} onClick={(e) => deleteOrder(id, e)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
