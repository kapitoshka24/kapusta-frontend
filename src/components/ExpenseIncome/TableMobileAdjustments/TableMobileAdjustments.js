import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from '../TableMobile/TableMobile.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import { adjustmentsOptions } from '../../../helpers/adjustmentsOptions';

export default function TableMobile() {
  const adjustments = useSelector(kapustaSelectors.getAdjustments);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kapustaOperations.fetchAdjustments());
  }, [dispatch]);

  const onDeleteAdjustments = useCallback(
    async id => {
      setDisabledDelete(true);
      await dispatch(kapustaOperations.deleteAdjustments(id));
      await dispatch(kapustaOperations.fetchTotalBalance());
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
    <ul className={styles.list}>
      {adjustments.map(({ date, name, sum, category, _id }) => (
        <li className={styles.item} key={_id}>
          <div className={styles.expense__thumb}>
            <p className={styles.name}>
              <EllipsisText text={name} length={40} />
            </p>

            <div className={styles.date__thumb}>
              <span className={styles.date}>{convertDate(date)}</span>
              <p className={styles.category}>{adjustmentsOptions[category]}</p>
            </div>
          </div>

          <div className={styles.sum__thumb}>
            <span
              className={sum >= 0 ? styles.sumPositive : styles.sumNegative}
            >
              {Number.parseFloat(sum).toFixed(2)} грн.
            </span>
            <div className={styles.icon__thumb}>
              <Delete
                className={`${styles.icon__delete} ${
                  disabledDelete ? styles['disabled-delete'] : ''
                }`}
                onClick={() => onDeleteAdjustments(_id)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
