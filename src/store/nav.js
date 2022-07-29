import { createSlice } from '@reduxjs/toolkit';

const initialState = { selected: '' };

const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      state.selected = action.payload;
    },
  }
});

export const navActions = navSlice.actions;

export default navSlice.reducer;