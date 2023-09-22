import React from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../../Navigation';
import Image from 'next/image';
import logo from 'public/imgs/logo.png';
import { BurgerButton } from '../../BurgerButton/BurgerButton';
import { ModalPortal } from '../../Modals/ModalPortal/ModalPortal';
import { BasketButton } from '../../BasketButton';
import { ProfileButton } from '../../ProfileButton/ProfileButton';
import { SignOut } from '../../LoginBtns/SignOut';
import { SignIn } from '../../LoginBtns/SignIn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const Header = async () => {
  const isAuth = await getServerSession(authOptions);
  return (
    <header className={styles.root}>
      <div className={styles.logo_side}>
        <Image className={styles.logo} src={logo} alt="LOGO" />
      </div>
      <Navigation />
      <ul className={styles.menu}>
        {isAuth ? (
          <>
            <li className={`${styles.menu_item} ${styles.profile}`}>
              <ProfileButton />
            </li>
            <li className={`${styles.menu_item} ${styles.signout}`}>
              <SignOut>Sign Out</SignOut>
            </li>
          </>
        ) : (
          <SignIn />
        )}
        <ModalPortal type="burger">
          <BurgerButton />
        </ModalPortal>
      </ul>
    </header>
  );
};
