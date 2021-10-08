import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({ children, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
