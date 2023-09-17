import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { SignOut } from '@/app/components/LoginBtns/SignOut';
import { SignIn } from '@/app/components/LoginBtns/SignIn';
import { BasketButton } from '../BasketButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';

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
              <BasketButton />
            </li>
            <li className={`${styles.menu_item} ${styles.profile}`}>
              <ProfileButton />
            </li>
            <li className={styles.menu_item}>
              <SignOut>Sign Out</SignOut>
            </li>
          </>
        ) : (
          <SignIn />
        )}
      </ul>
    </nav>
  );
};
