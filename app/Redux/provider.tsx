'use client';

import { Provider } from 'react-redux/es/exports';
import { store } from './store';

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
