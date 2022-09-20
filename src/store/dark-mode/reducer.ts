import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

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
