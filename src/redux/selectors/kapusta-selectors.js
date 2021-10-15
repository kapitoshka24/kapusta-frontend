const getTotalBalance = state => state.kapusta.totalBalance;
const getCategoryExpenses = state => state.kapusta.reportSummary.expenses;
const getCategoryIncome = state => state.kapusta.reportSummary.income;

const selectors = { getTotalBalance, getCategoryExpenses, getCategoryIncome };
export default selectors;
