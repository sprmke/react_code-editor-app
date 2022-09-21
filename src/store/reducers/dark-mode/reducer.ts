import { createSlice } from '@reduxjs/toolkit';

export const initialState = false;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

// store darkModeReducer in a constant for autocompletion
// inside combineReducers from rootReducer file
const darkModeReducer = darkModeSlice.reducer;
export default darkModeReducer;
