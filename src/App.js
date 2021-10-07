import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import authSelectors from './redux/selectors/auth-selectors';

import Preloader from './components/Preloader';
import Header from './components/Header';
// import Login from './components/Login';
// import Register from './components/Register';
// import TotalBalance from './components/TotalBalance';

const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const TotalBalance = lazy(() => import('./components/TotalBalance'));

export default function App() {
  const isLogged = useSelector(authSelectors.selectUserIsLogged);

  return (
    <>
      <Header />

      <Suspense fallback={<Preloader />}>
        {isLogged ? (
          <Switch>
            <Route path="/totalBalance" component={TotalBalance} />
            <Route path="/" exact component={TotalBalance} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Login} />
            <Redirect to="/" />
          </Switch>
        )}
      </Suspense>
    </>
  );
}
