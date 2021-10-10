import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

import authSelectors from './redux/selectors/auth-selectors';

import { PublicRoute, PrivateRoute } from './routes';
import Preloader from './components/Preloader';
import Header from './components/Header';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ExpenceIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));
// const ReportPage = lazy(() => import('./pages/ReportPage'));
// const Expense = lazy(() => import('./components/ExpenseIncome/Expense'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  const isLogged = useSelector(authSelectors.selectUserIsLogged);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <PublicRoute path="/login" isLogged={isLogged}>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" isLogged={isLogged}>
            <RegisterPage />
          </PublicRoute>

          <PrivateRoute path="/" isLogged={isLogged} exact>
            <ExpenceIncomePage />
          </PrivateRoute>

          <PrivateRoute path="/home" isLogged={isLogged} exact>
            <ExpenceIncomePage />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
