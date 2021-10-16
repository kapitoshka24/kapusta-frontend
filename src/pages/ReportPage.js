import Chart from '../components/ExpenseIncome/Chart';
import Turnover from '../components/Report/Turnover';
import ReportBalance from '../components/Report/ReportBalance';
import TurnoverSlider from '../components/Report/TurnoverSlider';

export default function ReportPage() {
  return (
    <>
      <ReportBalance />
      <Turnover />
      <TurnoverSlider />
      <Chart />
    </>
  );
}
