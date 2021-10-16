import Header from '../components/Header';
import TotalBalance from '../components/ExpenseIncome/TotalBalance';
import Expense from '../components/ExpenseIncome/Expense';
import styles from '../styles/AppComon.module.scss';

export default function ExpenceIncomePage() {
  return (
    <div className={styles.loggedInBg}>
      <Header />
      <TotalBalance />
      <Expense />
    </div>
  );
}
