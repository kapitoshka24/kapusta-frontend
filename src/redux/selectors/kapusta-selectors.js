const getTotalBalance = state => state.kapusta.totalBalance;
const getLoading = state => state.kapusta.loading;
const getReportYear = state => state.kapusta.reportYear;
const getReportMonth = state => state.kapusta.reportMonth;
const getReportYears = state => state.kapusta.reportYears;
const getMonthlySummary = state => state.kapusta.monthlySummary;
const getCategoryExpenses = state => state.kapusta.reportSummary.expenses;
const getCategoryIncome = state => state.kapusta.reportSummary.income;
const getCategotyDetails = state => state.kapusta.categoryDetails;
const getExpense = state => state.kapusta.expense;
const getIncome = state => state.kapusta.income;

const selectors = {
  getTotalBalance,
  getLoading,
  getReportYear,
  getReportMonth,
  getReportYears,
  getMonthlySummary,
  getCategoryExpenses,
  getCategoryIncome,
  getCategotyDetails,
  getExpense,
  getIncome,
};

export default selectors;
