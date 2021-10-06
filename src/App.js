import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
