const getTotalBalance = state => state.kapusta.totalBalance;
const getReportYear = state => state.kapusta.reportYear;
const getReportMonth = state => state.kapusta.reportMonth;
const getReportYears = state => state.kapusta.reportYears;

const selectors = {
  getTotalBalance,
  getReportYear,
  getReportMonth,
  getReportYears,
};
export default selectors;
