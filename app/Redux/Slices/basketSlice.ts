'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IBasketState {
  filter: string[];
  kitchens: string[];
}
export interface IFilter {
  name: string;
}

const initialState: IBasketState = {
  filter: [],
  kitchens: ['Pizza', 'Burger', 'BBQ', 'Sushi', 'Vegan', 'Desserts'],
};

const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    selector: (state, action: PayloadAction<IFilter>) => {
      if (state.filter.includes(action.payload.name)) {
        state.filter.splice(
          state.filter.findIndex((e) => e === action.payload.name),
          1,
        );
      } else {
        state.filter.push(action.payload.name);
      }
    },
  },
});
