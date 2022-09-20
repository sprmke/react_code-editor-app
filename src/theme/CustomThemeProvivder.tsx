import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { PropsWithChildren } from 'react';
import { useAppSelector } from '../store/hooks';
import { appColors, darkModeColors } from './color';

const CustomThemeProvivder = (props: PropsWithChildren<{}>) => {
  const { background: aBackground, font: aFont } = appColors;
  const { background: dBackground, font: dFont } = darkModeColors;

  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? dBackground : aBackground,
    font: darkMode ? dFont : aFont,
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvivder;

// We need to use module augmentation
// for the theme to accept our theme color values,
// Learn more: https://mui.com/material-ui/customization/theming/#custom-variables
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    background: string;
    font: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background: string;
    font: string;
  }
}
