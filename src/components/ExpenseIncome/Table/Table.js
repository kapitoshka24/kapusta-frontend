import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from './Table.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import { expenseOptions } from '../../../helpers/expenseOptions';

export default function Table() {
  const expense = useSelector(kapustaSelectors.getExpense);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kapustaOperations.fetchExpense());
  }, [dispatch]);

  const onDeleteExpense = useCallback(
    async id => {
      setDisabledDelete(true);
      await dispatch(kapustaOperations.deleteExpense(id));
      await dispatch(kapustaOperations.fetchTotalBalance());
      await dispatch(kapustaOperations.fetchMonthlySummary());
      setDisabledDelete(false);
    },
    [dispatch],
  );

  const convertDate = date => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${day}.${month}.${year}`;
  };

  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expense.map(({ date, name, sum, category, _id }) => (
            <tr key={_id}>
              <td>{convertDate(date)}</td>
              <td>
                <EllipsisText text={name} length={40} />
              </td>
              <td className={styles.category}>{expenseOptions[category]}</td>
              <td className={styles.sumNegative}>
                - {Number.parseFloat(sum).toFixed(2)} грн
              </td>
              <td
                className={`${styles.icon__bg} ${
                  disabledDelete ? styles['disabled-delete'] : ''
                }`}
                onClick={() => onDeleteExpense(_id)}
              >
                <Delete className={styles.icon__delete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
