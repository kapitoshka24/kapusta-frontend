import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/operations';

import TotalBalance from '../components/ExpenseIncome/TotalBalance';
import Expense from '../components/ExpenseIncome/Expense';

export default function ExpenseIncomePage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  return (
    <>
      <TotalBalance />
      <Expense />
    </>
  );
}
