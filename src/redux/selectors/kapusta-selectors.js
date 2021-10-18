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
const getTotalExpenses = state => state.kapusta.totalExpenses;
const getTotalIncome = state => state.kapusta.totalIncome;
const getAdjustments = state => state.kapusta.adjustments;

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
  getTotalExpenses,
  getTotalIncome,
  getAdjustments,
};

export default selectors;
