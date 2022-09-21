import { combineReducers } from '@reduxjs/toolkit';
import darkModeReducer from './dark-mode/reducer';
import fileReducer from './files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: fileReducer,
});

export default rootReducer;
