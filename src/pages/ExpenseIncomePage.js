// import Header from '../components/Header';
import TotalBalance from '../components/ExpenseIncome/TotalBalance';
import Expense from '../components/ExpenseIncome/Expense';
// import styles from '../styles/AppCommon.module.scss';

export default function ExpenseIncomePage() {
  return (
    // <div className={styles.loggedInBg}>
    // <Header />
    <>
      <TotalBalance />
      <Expense />
      {/* </div> */}
    </>
  );
}
