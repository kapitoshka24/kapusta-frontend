const getTotalBalance = state => state.kapusta.totalBalance;
const getExpense = state => state.kapusta.expense;

const selectors = {
  getTotalBalance,
  getExpense,
};

export default selectors;
