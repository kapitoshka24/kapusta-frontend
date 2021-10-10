import { useSelector, useDispatch } from 'react-redux';
import { getTotalBalance } from '../../../redux/selectors';
import { changeTotalBalance } from '../../../redux/actions';
import { useFormik } from 'formik';
import ReportBalanceModal from '../ReportBalanceModal';
import BackToMainPage from '../../BackToMainPage';
import GetCurrentMonth from '../GetCurrentMonth';
import styles from './ReportBalance.module.scss';
import useWindowDementions from '../../../helpers/useWindowDementions';

const validate = values => {
  const errors = {};
  if (/\D/.test(values.balance)) {
    errors.balance = 'Invalid balance';
  }

  return errors;
};

export default function ReportBalance() {
  const balance = useSelector(getTotalBalance);
  const dispatch = useDispatch();

  const { width } = useWindowDementions();

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
      <BackToMainPage />
      {width >= 768 && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="balance">
            Баланс:
          </label>
          <div className={styles.inputContainer}>
            <div className={styles.currencyContainer}>
              <input
                className={styles.input}
                id="balance"
                name="balance"
                onChange={handleChange}
                value={values.balance}
                autoComplete="off"
              />
              <span className={styles.currency}>UAH</span>
            </div>

            {errors.balance ? <div>{errors.balance}</div> : null}

            {width >= 1280 && (
              <button className={styles.button} disabled={false} type="submit">
                Подтвердить
              </button>
            )}
          </div>
        </form>
      )}
      <GetCurrentMonth />
      {width < 768 && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="balance">
            Баланс:
          </label>
          <div className={styles.inputContainer}>
            <div className={styles.currencyContainer}>
              <input
                className={styles.input}
                id="balance"
                name="balance"
                type="number"
                onChange={handleChange}
                value={values.balance}
                autoComplete="off"
              />
              <span className={styles.currency}>UAH</span>
            </div>

            {errors.balance ? <div>{errors.balance}</div> : null}
            {/* {windowWidth >= 1280 && (
              <button className={styles.button} disabled={false} type="submit">
                Подтвердить
              </button>
            )} */}
          </div>
        </form>
      )}

      {!balance && <ReportBalanceModal />}
    </div>
  );
}
