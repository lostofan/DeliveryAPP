import React from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import avatar from 'public/imgs/avatar.png';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { SignOut } from '@/app/components/LoginBtns/SignOut';
import { SignIn } from '@/app/components/LoginBtns/SignIn';
import { ModalPortal } from '../ModalPortal/ModalPortal';

export const Navbar = async () => {
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
      </ul>
    </nav>
  );
};
