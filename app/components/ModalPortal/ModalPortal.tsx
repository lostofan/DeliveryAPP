'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalRestaurant } from '../ModalRestaurant';

import React from 'react';
import { ClickAwayListener } from '../ClickAwayListener';
import { ProfileModal } from '../ProfileModal';

interface IModalPortal {
  children: React.ReactNode;
  id?: number;
  type: 'menu' | 'profile';
}

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
              <ClickAwayListener onClickAway={handleClickAway}>
                <ModalRestaurant onClose={() => setShowModal(false)} id={id} />
              </ClickAwayListener>,
              document.body,
            )
          );
        }
        case 'profile': {
          return (
            showModal &&
            createPortal(
              <ClickAwayListener onClickAway={handleClickAway}>
                <ProfileModal onClose={() => setShowModal(false)} />
              </ClickAwayListener>,
              document.body,
            )
          );
        }
      }
    }
  };

  return (
    <>
      <div onClick={() => setShowModal(true)}>{children}</div>

      {renderModal(type)}
    </>
  );
};
