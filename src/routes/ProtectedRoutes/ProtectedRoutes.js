import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import Preloader from '../../components/Preloader';

export default function ProtectedRoutes() {
  return (
    <Switch>
      <Suspense fallback={<Preloader />}>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Suspense>
    </Switch>
  );
}
