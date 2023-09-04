'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ISelectorState {
  filter: string[];
  kitchens: string[];
}
export interface IFilter {
  name: string;
}

const initialState: ISelectorState = {
  filter: [],
  kitchens: ['Pizza', 'Burger', 'BBQ', 'Sushi', 'Vegan', 'Desserts'],
};

const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<IFilter>) => {
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

export const selectFilter = (state: RootState) => state.selector.filter;
export const selectKitchens = (state: RootState) => state.selector.kitchens;
export const { addFilter } = selectorSlice.actions;
export default selectorSlice.reducer;
