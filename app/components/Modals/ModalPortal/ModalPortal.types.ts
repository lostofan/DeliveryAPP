import { Session } from 'next-auth';

export interface IModalPortal {
  children: React.ReactNode;
  id?: number;
  type: 'menu' | 'profile' | 'basket' | 'burger';
}
