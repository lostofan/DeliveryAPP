'use client';
import React from 'react';
import { ModalPortal } from '../Modals/ModalPortal/ModalPortal';
import Image from 'next/image';
import styles from './ProfileButton.module.scss';
import { useGetUser } from '@/app/hooks/useGetUser';
import { useSession } from 'next-auth/react';
import { IUser } from './ProfileButton.types';

export const ProfileButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <ModalPortal type="profile">
          <img
            className={styles.avatar}
            src={session?.user.image}
            width={60}
            height={60}
            alt="Avatar"
          />
        </ModalPortal>
      ) : (
        'load'
      )}
    </>
  );
};
