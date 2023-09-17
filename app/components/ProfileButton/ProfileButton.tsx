import React from 'react';
import { ModalPortal } from '../Modals/ModalPortal/ModalPortal';
import Image from 'next/image';
import avatar from 'public/imgs/avatar.png';
import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  return (
    <ModalPortal type="profile">
      <Image className={styles.avatar} src={avatar} alt="Avatar" />
    </ModalPortal>
  );
};
