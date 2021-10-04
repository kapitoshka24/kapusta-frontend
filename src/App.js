import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';

import Container from './components/Container';
import Expense from './components/Expense';
import Controls from './components/Controls';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <TotalBalance /> */}
      <Container>
        {/* <Controls /> */}
        <Expense />
      </Container>
    </>
  );
}
