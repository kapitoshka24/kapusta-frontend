import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/operations';
import NotFound from './pages/NotFoundPage';
import Loader from './components/Loader/';
// import { useState } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenceIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  // const [location, setLocation] = useState('/');
  // const [redirectTo, setRedirectTo] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());

    // setLocation(localStorage.getItem('pathname'));

    // if (location) setRedirectTo(true);
  }, [dispatch]);

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
