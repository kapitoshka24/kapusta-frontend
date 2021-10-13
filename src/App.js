import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';

import { authOperations } from './redux/operations';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenseIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <Suspense
      fallback={
        <Loader
          className="Loader-main"
          type="Bars"
          color="#45a049"
          height={50}
          width={50}
        />
      }
    >
      <Switch>
        <PrivateRoute exact path="/" redirectTo="/login" />
        <PublicRoute path="/login" redirectTo="/main-page">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterPage />
        </PublicRoute>
        <PrivateRoute path="/main-page" restricted redirectTo="/login">
          <ExpenseIncomePage />
        </PrivateRoute>
        <PrivateRoute path="/report-page" restricted redirectTo="/login">
          <ReportPage />
        </PrivateRoute>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
}
