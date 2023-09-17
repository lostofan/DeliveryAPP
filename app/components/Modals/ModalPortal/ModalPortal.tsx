'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { RestaurantModal } from '../RestaurantModal';

import React from 'react';
import { ClickAwayListener } from '../../ClickAwayListener';
import { ProfileModal } from '../ProfileModal';
import { BasketModal } from '../BasketModal';
import styles from './ModalPortal.module.scss';
import { IModalPortal } from './ModalPortal.types';
import { BurgerMenu } from '../../BurgerMenu/BurgerMenu';

export const ModalPortal: React.FC<IModalPortal> = ({ children, id, type }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClickAway = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  const renderModal = (type: string) => {
    {
      switch (type) {
        case 'menu': {
          return (
            showModal &&
            id &&
            createPortal(
              <div className={styles.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <RestaurantModal onClose={() => setShowModal(false)} id={id} />
                </ClickAwayListener>
              </div>,
              document.body,
            )
          );
        }
        case 'profile': {
          return (
            showModal &&
            createPortal(
              <div className={styles.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <ProfileModal onClose={() => setShowModal(false)} />
                </ClickAwayListener>
              </div>,
              document.body,
            )
          );
        }
        case 'basket': {
          return (
            showModal &&
            createPortal(
              <div className={styles.basket}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <BasketModal onClose={() => setShowModal(false)} />
                </ClickAwayListener>
              </div>,
              document.body,
            )
          );
        }
        case 'burger': {
          return (
            showModal &&
            createPortal(
              <div className={styles.burger}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <BurgerMenu />
                </ClickAwayListener>
              </div>,
              document.body,
            )
          );
        }
      }
    }
  };

  return (
    <>
      <div className={type === 'burger' ? styles.wrapper : ''} onClick={() => setShowModal(true)}>
        {children}
      </div>
      {renderModal(type)}
    </>
  );
};
