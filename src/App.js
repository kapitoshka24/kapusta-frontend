import React, { Suspense, lazy, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Switch } from 'react-router';
import PublicRoute from './components/PublicRoute';
// import { useDispatch } from 'react-redux';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenceIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(authOperations.getCurrentUser()),[dispatch]);
  return (
    <>
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
          <PublicRoute path="/login" restricted redirectTo="/">
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}

{
  /* <RegisterPage /> */
}
{
  /* <LoginPage /> */
}
{
  /* <ExpenceIncomePage /> */
}
{
  /* <ReportPage /> */
}
