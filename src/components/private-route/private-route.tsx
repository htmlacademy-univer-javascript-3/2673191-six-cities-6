import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { AuthorizationStatus } from '../../models/authorization-status';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, children}: Props): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
