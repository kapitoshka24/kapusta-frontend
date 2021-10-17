import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import styles from './Turnover.module.scss';

const Turnover = () => {
  const totalIncome = useSelector(kapustaSelectors.getTotalIncome);
  const totalExpenses = useSelector(kapustaSelectors.getTotalExpenses);

  return (
    <div className={styles.turnoverContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.expenses}>
          Расходы:
          <span className={styles.expensesContent}>{`- ${
            totalExpenses.length > 8
              ? `${totalExpenses.substring(0, 7)}...`
              : totalExpenses
          } грн.`}</span>
        </p>
      </div>
      <span className={styles.verticalLine}></span>
      <div className={styles.contentContainer}>
        <p className={styles.income}>
          Доходы:
          <span className={styles.incomeContent}>
            {`+ ${
              totalIncome.length > 8
                ? `${totalIncome.substring(0, 7)}...`
                : totalIncome
            } грн.`}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Turnover;
