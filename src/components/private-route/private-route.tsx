import {Navigate} from 'react-router-dom';
import { APP_ROUTE, AUTHORIZATION_STATUS } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AUTHORIZATION_STATUS;
  children: JSX.Element;
};

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AUTHORIZATION_STATUS.Auth ? children : (<Navigate to={APP_ROUTE.Login}/>)
  );
}

export default PrivateRoute;

