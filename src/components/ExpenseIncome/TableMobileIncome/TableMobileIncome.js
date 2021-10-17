import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from '../TableMobile/TableMobile.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import { incomeOptions } from '../../../helpers/incomeOptions';

export default function TableMobile() {
  const income = useSelector(kapustaSelectors.getIncome);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kapustaOperations.fetchIncome());
  }, [dispatch]);

  const onDeleteIncome = useCallback(
    id => {
      dispatch(kapustaOperations.deleteIncome(id));
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
    <ul className={styles.list}>
      {income.map(({ date, name, sum, category, _id }) => (
        <li className={styles.item} key={_id}>
          <div className={styles.expense__thumb}>
            <p className={styles.name}>
              <EllipsisText text={name} length={40} />
            </p>

            <div className={styles.date__thumb}>
              <span className={styles.date}>{convertDate(date)}</span>
              <p className={styles.category}>{incomeOptions[category]}</p>
            </div>
          </div>

          <div className={styles.sum__thumb}>
            <span className={styles.sumPositive}>{sum} грн.</span>
            <div className={styles.icon__thumb}>
              <Delete
                className={styles.icon__delete}
                onClick={() => onDeleteIncome(_id)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
