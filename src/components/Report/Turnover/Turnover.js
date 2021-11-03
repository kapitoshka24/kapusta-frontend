import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import styles from './Turnover.module.scss';

const Turnover = () => {
  const totalIncome = useSelector(kapustaSelectors.getTotalIncome);
  const totalExpenses = useSelector(kapustaSelectors.getTotalExpenses);

  const parsedExpense = parseFloat(totalExpenses).toFixed(2);
  const parsedIncome = parseFloat(totalIncome).toFixed(2);

  return (
    <div className={styles.turnoverContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.expenses}>
          Расходы:
          <span className={styles.expensesContent}>{`- ${
            parsedExpense.length > 8
              ? `${parsedExpense.substring(0, 7)}...`
              : parsedExpense
          } грн.`}</span>
        </p>
      </div>
      <span className={styles.verticalLine}></span>
      <div className={styles.contentContainer}>
        <p className={styles.income}>
          Доходы:
          <span className={styles.incomeContent}>
            {`+ ${
              parsedIncome.length > 8
                ? `${parsedIncome.substring(0, 7)}...`
                : parsedIncome
            } грн.`}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Turnover;
