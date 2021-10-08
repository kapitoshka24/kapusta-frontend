import { useSelector, useDispatch } from 'react-redux';
import { getTotalBalance } from '../../redux/selectors';
import { changeTotalBalance } from '../../redux/actions';
import { useFormik } from 'formik';
import BalanceModal from '../BalanceModal';
import styles from './totalBalance.module.scss';

const validate = values => {
  const errors = {};
  if (/\D/.test(values.balance)) {
    errors.balance = 'Invalid balance';
  }

  return errors;
};

const TotalBalance = () => {
  const balance = useSelector(getTotalBalance);
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      balance,
    },
    // validate,
    onSubmit: values => {
      if (values.balance === balance) {
        return;
      }
      //   alert(JSON.stringify(values, null, 2));
      dispatch(changeTotalBalance(values.balance));
    },
  });
  return (
    <div className={styles.balanceContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="balance">
          Баланс:
        </label>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            id="balance"
            name="balance"
            type="number"
            onChange={handleChange}
            value={values.balance}
            autoComplete="off"
          />

          {errors.balance ? <div>{errors.balance}</div> : null}
          <button className={styles.button} disabled={false} type="submit">
            Подтвердить
          </button>
          <span className={styles.currency}>UAH</span>
        </div>
      </form>
      <a className={styles.reports} href="./">
        Перейти к отчетам
      </a>
      {!balance && <BalanceModal />}
    </div>
  );
};

export default TotalBalance;
