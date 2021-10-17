import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from './redux/operations';
import { authSelectors } from './redux/selectors';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import NotFound from './pages/NotFoundPage';
import Loader from './components/Loader/';
import appStyles from './styles/AppCommon.module.scss';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenseIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
    <div className={isLoggedIn ? appStyles.loggedInBg : appStyles.loggedOutBg}>
      <Header />

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
            <ExpenseIncomePage />
          </PrivateRoute>
          <PrivateRoute path="/report-page" restricted redirectTo="/login">
            <ReportPage />
          </PrivateRoute>
          <PublicRoute>
            <NotFound />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
