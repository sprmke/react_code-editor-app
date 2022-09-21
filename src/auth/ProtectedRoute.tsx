import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType } from 'react';
import Loading from '../components/common/Loading/Loading';

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component as ComponentType, {
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};

export default ProtectedRoute;
