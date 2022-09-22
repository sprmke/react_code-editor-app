import { makeStyles } from '@material-ui/styles';
import SignOut from '../../../auth/Signout';
import OpenWorkSpace from '../../CodeEditor/OpenWorkSpace/OpenWorkSpace';

const AuthenticatedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OpenWorkSpace />
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
