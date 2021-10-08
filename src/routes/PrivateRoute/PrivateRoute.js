import { Route, Redirect } from 'react-router';

export default function PrivateRoute({ children, isLogged, ...rest }) {
  console.log(rest);
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
