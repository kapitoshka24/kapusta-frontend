import Loader from 'react-loader-spinner';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';

import { authOperations } from './redux/operations';
import { authSelectors } from './redux/selectors';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import NotFound from './pages/NotFoundPage';

import appStyles from './styles/AppCommon.module.scss';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenseIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <div className={isLoggedIn ? appStyles.loggedInBg : appStyles.loggedOutBg}>
      <Header />

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
