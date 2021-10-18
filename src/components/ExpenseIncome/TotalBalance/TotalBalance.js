import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';

import {
  inputChangeHandler,
  inputBlurHandler,
} from '../../../helpers/priceInputParser';
import BalanceModal from '../BalanceModal';
import styles from './TotalBalance.module.scss';
import { Link } from 'react-router-dom';

const TotalBalance = () => {
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

  const handleChange = ({ target: { value } }) => {
    setBalanceValue(inputChangeHandler(value));

    if (numberBalanceValue === 0) {
      console.log(1);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleBlur = ({ target: { value } }) => {
    setBalanceValue(inputBlurHandler(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(kapustaOperations.addTotalBalance(numberBalanceValue));
    dispatch(kapustaOperations.fetchAdjustments());

    if (balanceValue === '') {
      setBalanceValue(0);
    }
  };

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
            onChange={handleChange}
            onBlur={handleBlur}
            value={balanceValue}
            autoComplete="off"
          />
          <button className={styles.button} disabled={false} type="submit">
            Подтвердить
          </button>
          <span className={styles.currency}>UAH</span>
        </div>
      </form>
      <Link className={styles.reports} to="/report-page">
        Перейти к отчетам
      </Link>

      {showModal && <BalanceModal closeModal={toggleModal} />}
    </div>
  );
};

export default TotalBalance;
