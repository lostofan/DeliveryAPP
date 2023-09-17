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
    addSelector: (state, action: PayloadAction<IFilter>) => {
      state.filter.push(action.payload.name);
    },
    subSelector: (state, action: PayloadAction<IFilter>) => {
      state.filter = state.filter.filter((elem) => elem !== action.payload.name);
    },
  },
});

export const selectFilter = (state: RootState) => state.selector.filter;
export const selectKitchens = (state: RootState) => state.selector.kitchens;
export const { addSelector, subSelector } = selectorSlice.actions;
export default selectorSlice.reducer;
