import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../app/style/globals.scss';
import '../app/style/normalize.css';
import '../app/style/variables.scss';
import '../app/style/fonts.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delivery-app',
  description: 'ORDER IT! EAT IT!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
