'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SelectorState {
  filter: string[];
}
export interface IFilter {
  name: string;
}

const initialState: SelectorState = {
  filter: [],
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
export const { addFilter } = selectorSlice.actions;
export default selectorSlice.reducer;
