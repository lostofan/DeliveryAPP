import React from 'react';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import avatar from 'public/imgs/avatar.png';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { SignOut } from '@/app/components/LoginBtns/SignOut';
import { SignIn } from '@/app/components/LoginBtns/SignIn';
import { ModalPortal } from '../ModalPortal/ModalPortal';

export const Navigation = async () => {
  const isAuth = await getServerSession(authOptions);
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link href="/#restaurants">Restaurants</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/#promo">Deals</Link>
        </li>
        <li className={`${styles.menu_item} ${styles.orders}`}>
          <Link href="/#">Orders</Link>
        </li>
        {isAuth ? (
          <>
            <li className={`${styles.menu_item} ${styles.basket}`}>
              <ModalPortal type="basket">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66667L2.5 5.00001V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00001L15 1.66667H5Z"
                    stroke="#4E60FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 5H17.5"
                    stroke="#4E60FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 8.33333C13.3333 9.21738 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11595 11.6667 8.2681 11.3155 7.64298 10.6904C7.01786 10.0652 6.66667 9.21738 6.66667 8.33333"
                    stroke="#4E60FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ModalPortal>
            </li>
            <li className={`${styles.menu_item} ${styles.profile}`}>
              <ModalPortal type="profile">
                <Image className={styles.avatar} src={avatar} alt="Avatar" />
              </ModalPortal>
            </li>
            <li className={styles.menu_item}>
              <SignOut />
            </li>
          </>
        ) : (
          <SignIn />
        )}
      </ul>
    </nav>
  );
};
