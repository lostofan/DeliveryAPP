'use client';
import React, { useState } from 'react';
import styles from './ProfileModal.module.scss';
import { useUpdateUser } from '@/app/hooks/useUpdateUser';
import { useGetUser } from '@/app/hooks/useGetUser';
import { useSession } from 'next-auth/react';

interface ProfileModal {
  onClose: () => void;
}
interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}
export const ProfileModal: React.FC<ProfileModal> = ({ onClose }) => {
  const session = useSession();
  const { firstName, lastName, email, password, address, phone }: IUser = useGetUser(
    session.data?.user.id,
  );
  const [isFirstName, setFirstName] = useState(firstName);
  const [isLastName, setLastName] = useState(lastName);
  const [isPhone, setPhone] = useState(phone);
  const [isEmail, setEmail] = useState(email);

  async function updateUser(id: number) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName: isFirstName,
        lastName: isLastName,
        email: isEmail,
        phone: isPhone,
      }),
    });
  }

  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <div className={styles.settings}>
          <ul className={styles.settingsList}>
            <h3 className={styles.title}>Settings</h3>
            <li className={styles.settingsItem}>
              <svg
                className={styles.settingsIco}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.settingsText}>
                <p className={styles.settingsTitle}>Account</p>
                <p className={styles.settingsDescription}>Personal information</p>
              </div>
            </li>
            <li className={styles.settingsItem}>
              <svg
                className={styles.settingsIco}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.3442 3.29018 4.43655 4.6967 3.03003C6.10322 1.6235 8.01088 0.833328 10 0.833328C11.9891 0.833328 13.8968 1.6235 15.3033 3.03003C16.7098 4.43655 17.5 6.3442 17.5 8.33333Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.settingsText}>
                <p className={styles.settingsTitle}>Address</p>
                <p className={styles.settingsDescription}>Shippings addresses</p>
              </div>
            </li>
            <li className={styles.settingsItem}>
              <svg
                className={styles.settingsIco}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.99998 18.3333C9.99998 18.3333 16.6666 15 16.6666 10V4.16667L9.99998 1.66667L3.33331 4.16667V10C3.33331 15 9.99998 18.3333 9.99998 18.3333Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className={styles.settingsText}>
                <p className={styles.settingsTitle}>Security</p>
                <p className={styles.settingsDescription}>Password</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.category}>
          <p className={styles.title}>Account</p>
          <div className={styles.options}>
            <div className={styles.optionsChange}>
              <p className={styles.optionsTitle}>First name</p>
              <input
                type="text"
                defaultValue={firstName}
                className={styles.optionsInput}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.optionsChange}>
              <p className={styles.optionsTitle}>Last name</p>
              <input
                type="text"
                defaultValue={lastName}
                className={styles.optionsInput}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.optionsChange}>
              <p className={styles.optionsTitle}>Email</p>
              <input
                type="email"
                defaultValue={email}
                className={styles.optionsInput}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.optionsChange}>
              <p className={styles.optionsTitle}>Phone number</p>
              <input
                type="number"
                defaultValue={phone}
                className={styles.optionsInput}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button onClick={() => updateUser(session.data?.user.id)}>push</button>
          </div>
        </div>
      </div>
    </div>
  );
};
