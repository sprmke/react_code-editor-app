import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@mui/styles';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import Header from '../components/common/Header/Header';
import Loading from '../components/common/Loading/Loading';
import CodeEditor from '../pages/CodeEditor/CodeEditor';
import Home from '../pages/Home/Home';
import routes from './routes';

const MainRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Routes>
          <Route
            path={routes.home}
            element={
              isAuthenticated ? (
                <Navigate replace to={routes.codeEditor} />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path={routes.codeEditor}
            // pass component name only instad of Component itself
            element={<ProtectedRoute component={CodeEditor} />}
          />
        </Routes>
      </div>
    </div>
  );
};

// Material UI styling
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default MainRoutes;
