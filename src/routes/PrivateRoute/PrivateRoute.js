import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
