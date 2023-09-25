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
  const onClose = () => {
    setShowModal(false);
  };

  const renderModal = (type: string) => {
    {
      switch (type) {
        case 'menu': {
          return (
            showModal &&
            id &&
            createPortal(
              <>
                <div className={styles.root}>
                  <button className={styles.closeBtn} onClick={onClose}>
                    X
                  </button>
                </div>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <RestaurantModal id={id} />
                </ClickAwayListener>
              </>,
              document.body,
            )
          );
        }
        case 'profile': {
          return (
            showModal &&
            createPortal(
              <>
                <div className={styles.root}>
                  <button className={styles.closeBtn} onClick={onClose}>
                    X
                  </button>
                </div>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <ProfileModal />
                </ClickAwayListener>
              </>,
              document.body,
            )
          );
        }
        case 'basket': {
          return (
            showModal &&
            createPortal(
              <>
                <div className={styles.basket}>
                  <button className={styles.closeBtn} onClick={onClose}>
                    X
                  </button>
                </div>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <BasketModal />
                </ClickAwayListener>
              </>,
              document.body,
            )
          );
        }
        case 'burger': {
          return (
            showModal &&
            createPortal(
              <>
                <div className={styles.burger}></div>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <BurgerMenu />
                </ClickAwayListener>
              </>,
              document.body,
            )
          );
        }
      }
    }
  };

  return (
    <div className={type === 'burger' ? styles.wrapper : ''} onClick={() => setShowModal(true)}>
      {children}
      {renderModal(type)}
    </div>
  );
};
