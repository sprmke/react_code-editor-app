import { makeStyles } from '@material-ui/styles';
import SignOut from '../../../auth/Signout';

const AuthenticatedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Open Workspace</div>
      <SignOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default AuthenticatedButtons;
