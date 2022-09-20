import { createSlice } from '@reduxjs/toolkit';

export const initialState = false;

const darkmodeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
