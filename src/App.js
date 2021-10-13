import React, { Suspense, lazy, useEffect } from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Switch } from 'react-router';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/operations';

import styles from './styles/Loader.module.scss';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenceIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  return (
    <>
      <Suspense
        fallback={
          <Loader
            className={styles.LoaderMain}
            type="Circles"
            color="#ff751d"
            height={80}
            width={80}
          />
        }
      >
        <Switch>
          <PrivateRoute exact path="/" redirectTo="/login" />
          <PublicRoute path="/login" restricted redirectTo="/main-page">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PrivateRoute path="/main-page" restricted redirectTo="/login">
            <ExpenceIncomePage />
          </PrivateRoute>
          <PrivateRoute path="/report-page" restricted redirectTo="/login">
            <ReportPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
