import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalRestaurant } from '../ModalRestaurant';

import React from 'react';
import { ClickAwayListener } from '../ClickAwayListener';

interface IModalPortal {
  children: React.ReactNode;
  id: number;
}

export const ModalPortal: React.FC<IModalPortal> = ({ children, id }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClickAway = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div onClick={() => setShowModal(true)}>{children}</div>
      {showModal &&
        createPortal(
          <ClickAwayListener onClickAway={handleClickAway}>
            <ModalRestaurant onClose={() => setShowModal(false)} id={id} />
          </ClickAwayListener>,
          document.body,
        )}
    </>
  );
};
