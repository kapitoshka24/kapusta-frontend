import React from 'react';
import LogoutModal from './components/LogoutModal';

export default function App() {
  return (
    <>
      <LogoutModal massage={'Вы действительно хотите выйти?'} />
    </>
  );
}
