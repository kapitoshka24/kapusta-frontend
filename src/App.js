import React from 'react';

import Container from './components/Container';
import Expense from './components/Expense';
import Controls from './components/Controls';

export default function App() {
  return (
    <Container>
      <Controls />
      <Expense />
    </Container>
  );
}
