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
  return <div></div>;
};
