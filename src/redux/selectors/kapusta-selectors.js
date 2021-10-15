const getTotalBalance = state => state.kapusta.totalBalance;
const getCategoryExpenses = state => state.kapusta.reportSummary.expenses;
const getCategoryIncome = state => state.kapusta.reportSummary.income;
const getMonthlySummary = state => state.kapusta.monthlySummary;

const selectors = { getTotalBalance, getCategoryExpenses, getCategoryIncome, getMonthlySummary };

export default selectors;
