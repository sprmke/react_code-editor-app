import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import Loading from '../components/common/Loading/Loading';

interface ProtectRouteProps extends RouteProps {
  children: ReactNode;
  path: string;
}

const ProtectedRoute = (props: PropsWithChildren<{ [key: string]: any }>) => {
  const { children, ...args } = props;

  // Do the next alternative code after because this is not working with new React Router v6
  // Learn more: https://github.com/auth0/auth0-react/issues/226
  // <Route
  //   element={withAuthenticationRequired(children, {
  //     onRedirecting: () => <Loading />,
  //   })}
  //   {...args}
  // />;

  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isLoading || isAuthenticated) {
      return;
    }

    (async (): Promise<void> => {
      await loginWithRedirect({
        appState: {
          returnTo: `${window.location.pathname}${window.location.search}`,
        },
      });
    })();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return isAuthenticated ? <Route {...args}>{children}</Route> : <Loading />;
};

export default ProtectedRoute;
