import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import ReportBalanceModal from '../ReportBalanceModal';
import BackToMainPage from '../../BackToMainPage';
import GetCurrentMonth from '../GetCurrentMonth';
import styles from './ReportBalance.module.scss';
import useWindowDementions from '../../../helpers/useWindowDementions';

export default function ReportBalance() {
  const getBalance = useSelector(kapustaSelectors.getTotalBalance);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [balanceValue, setBalanceValue] = useState(getBalance);

  useEffect(() => {
    dispatch(kapustaOperations.fetchTotalBalance());
    setBalanceValue(getBalance);
  }, [dispatch, getBalance]);

  useEffect(() => {
    if (balanceValue === 0) {
      setShowModal(true);
    }
  }, [balanceValue]);

  const numberBalanceValue = Number(balanceValue);

  const toggleModal = () => {
    setShowModal(prevVal => !prevVal);
  };

  const handleChange = e => {
    const reg = /[A-Za-zА-Яа-яЁё]/g;
    setBalanceValue(e.target.value.replace(reg, ''));
    if (Number(e.target.value) === 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(kapustaOperations.addTotalBalance(numberBalanceValue));
    if (balanceValue === '') {
      setBalanceValue(0);
    }
  };
  const { width } = useWindowDementions();

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
                value={balanceValue}
                autoComplete="off"
              />
              <span className={styles.currency}>UAH</span>
            </div>

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
                value={balanceValue}
                autoComplete="off"
              />
              <span className={styles.currency}>UAH</span>
            </div>
            {/* {windowWidth >= 1280 && (
              <button className={styles.button} disabled={false} type="submit">
                Подтвердить
              </button>
            )} */}
          </div>
        </form>
      )}

      {showModal && <ReportBalanceModal closeModal={toggleModal} />}
    </div>
  );
}
