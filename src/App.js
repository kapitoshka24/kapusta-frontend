import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from './redux/operations';
import NotFound from './pages/NotFoundPage';
import Loader from './components/Loader/';
import { authSelectors } from './redux/selectors';
// import { useState } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenceIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  // const [location, setLocation] = useState('/');
  // const [redirectTo, setRedirectTo] = useState(false);
  const dispatch = useDispatch();

  const isFetching = useSelector(authSelectors.getIsFetching);
  const [inProgress, setInProgress] = useState(true);
  useEffect(() => {
    const getCurrentUser = async () => {
      dispatch(await authOperations.getCurrentUser());
      setInProgress(false);
    };
    getCurrentUser();
  }, [dispatch]);

  if (inProgress || isFetching) {
    return <Loader />;
  }

  // if (redirectTo) {
  //   console.log(location);
  //   return <Redirect to={location} />;
  // }

  return (
    <>
      <Suspense fallback={<Loader />}>
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
          <PublicRoute>
            <NotFound />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
