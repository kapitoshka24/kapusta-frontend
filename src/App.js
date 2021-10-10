import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

import authSelectors from './redux/selectors/auth-selectors';

import { PublicRoute, PrivateRoute } from './routes';
import Preloader from './components/Preloader';
import Header from './components/Header';
import MainComponent from './components/MainComponent/MainComponent';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExpenceIncomePage from './pages/ExpenseIncomePage';
import ReportPage from './pages/ReportPage';
import Expense from './components/ExpenseIncome/Expense';

const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const NotFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./pages/Home'));

export default function App() {

  const isLogged = useSelector(authSelectors.selectUserIsLogged);

  // <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
  //     {/* <RegisterPage /> */}
  //     {/* <LoginPage /> */}
  //     <ExpenceIncomePage />
  // </div>

  return (
    <>
      <Header />
      <MainComponent />

      <Suspense fallback={<Preloader />}>
        <Switch>
          <PublicRoute path="/login" isLogged={isLogged}>
            <Login />
          </PublicRoute>
          <PublicRoute path="/register" isLogged={isLogged}>
            <Register />
          </PublicRoute>

          <PrivateRoute path="/" isLogged={isLogged} exact>
            <Home />
          </PrivateRoute>

          <PrivateRoute path="/home" isLogged={isLogged} exact>
            <Home />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>

    </>
  );
}
