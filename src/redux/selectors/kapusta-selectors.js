const getTotalBalance = state => state.kapusta.totalBalance;
const getExpense = state => state.kapusta.expense;
const getIncome = state => state.kapusta.income;

const selectors = {
  getTotalBalance,
  getExpense,
  getIncome,
};

export default selectors;
