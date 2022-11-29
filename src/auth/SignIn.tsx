import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { commonColors } from '../theme/color';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  const onSignIn = () => {
    loginWithRedirect();
  };

  return (
    <Button className={classes.button} onClick={onSignIn}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
}));

export default SignIn;
