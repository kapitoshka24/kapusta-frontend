import React from 'react';
import TotalBalance from './components/TotalBalance';
import Login from './components/account/Login';
import Register from './components/account/Register';

export default function App() {
  return (
    <>
      <TotalBalance />
      {/* <Login /> */}
      <Register />
    </>
  );
}
