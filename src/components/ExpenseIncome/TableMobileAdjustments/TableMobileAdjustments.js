import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from '../TableMobile/TableMobile.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import { adjustmentsOptions } from '../../../helpers/adjustmentsOptions';

export default function TableMobile() {
  const adjustments = useSelector(kapustaSelectors.getAdjustments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kapustaOperations.fetchAdjustments());
  }, [dispatch]);

  const onDeleteAdjustments = useCallback(
    async id => {
      await dispatch(kapustaOperations.deleteAdjustments(id));
      await dispatch(kapustaOperations.fetchTotalBalance());
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
              {Number.parseInt(sum, 10)} грн.
            </span>
            <div className={styles.icon__thumb}>
              <Delete
                className={styles.icon__delete}
                onClick={() => onDeleteAdjustments(_id)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
