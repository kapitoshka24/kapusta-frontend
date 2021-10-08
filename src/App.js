import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import authSelectors from './redux/selectors/auth-selectors';

import { PublicRoute, PrivateRoute, ProtectedRoutes } from './routes';
import Preloader from './components/Preloader';
import Header from './components/Header';

const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

export default function App() {
  const isLogged = useSelector(authSelectors.selectUserIsLogged);

  return (
    <>
      <Header />

      <Suspense fallback={<Preloader />}>
        <Switch>
          <PublicRoute path="/login" isLogged={isLogged}>
            <Login />
          </PublicRoute>
          <PublicRoute path="/register" isLogged={isLogged}>
            <Register />
          </PublicRoute>

          <PrivateRoute path="/" isLogged={isLogged}>
            <ProtectedRoutes />
          </PrivateRoute>

          {/* <Route path="*">
            <NoFoundComponent />
          </Route> */}
        </Switch>
      </Suspense>
    </>
  );
}
