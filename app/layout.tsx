import type { Metadata } from 'next';
import { ReduxProvider } from './Redux/provider';
import { AuthProvider } from './authProvider';

import '../app/style/globals.scss';
import '../app/style/normalize.css';
import '../app/style/variables.scss';
import '../app/style/fonts.scss';

export const metadata: Metadata = {
  title: 'Delivery-app',
  description: 'ORDER IT! EAT IT!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
