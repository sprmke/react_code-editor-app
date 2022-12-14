import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { toggleDarkMode } from '../../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import AuthenticatedButtons from './AuthenticatedButtons';
import UnauthenticatedButtons from './UnauthenticatedButtons';

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon data-testid="dark-mode-icon" />
        <Switch
          onChange={onChangeDarkMode}
          color="default"
          checked={darkMode}
        />
        {isAuthenticated ? (
          <AuthenticatedButtons />
        ) : (
          <UnauthenticatedButtons />
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;
