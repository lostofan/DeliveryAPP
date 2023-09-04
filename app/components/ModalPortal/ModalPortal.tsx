import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalRestaurant } from '../ModalRestaurant';

import React from 'react';
import { ClickAwayListener } from '../ClickAwayListener';

interface IModalPortal {
  children: React.ReactNode;
  img: string;
  name: string;
  address: string;
}

export const ModalPortal: React.FC<IModalPortal> = ({ children, img, name, address }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClickAway = () => {
    if (showModal) {
      setShowModal(false);
    }
  };
  return (
    <>
      <div onClick={() => setShowModal(true)}>{children}</div>
      {showModal &&
        createPortal(
          <ClickAwayListener onClickAway={handleClickAway}>
            <ModalRestaurant
              onClose={() => setShowModal(false)}
              img={img}
              name={name}
              address={address}
            />
          </ClickAwayListener>,
          document.body,
        )}
    </>
  );
};
