'use client';

import { configureStore } from '@reduxjs/toolkit';
import selectorSlice from './Slices/selectorSlice';

export const store = configureStore({
  reducer: {
    selector: selectorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
