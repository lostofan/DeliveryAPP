'use client';

import { signOut } from 'next-auth/react';

export const SignOut = ({ children }: { children: React.ReactNode }) => {
  return <button onClick={() => signOut()}>{children}</button>;
};
