import { PayloadAction } from '@reduxjs/toolkit';
import darkModeReducer, { initialState, toggleDarkMode } from './reducer';

describe('dark mode reducer', () => {
  it('should return the initial state if no known action is provided', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(
      initialState
    );
  });

  it('should enable dark mode if it is disabled', () => {
    const IS_DARK_MODE_ENABLED = false;
    const darkModeState = darkModeReducer(IS_DARK_MODE_ENABLED, toggleDarkMode);
    expect(darkModeState).toEqual(true);
  });

  it('should disable dark mode if it is enabled', () => {
    const IS_DARK_MODE_ENABLED = true;
    const darkModeState = darkModeReducer(IS_DARK_MODE_ENABLED, toggleDarkMode);
    expect(darkModeState).toEqual(false);
  });
});
