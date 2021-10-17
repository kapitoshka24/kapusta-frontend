import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from '../Table/Table.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import { adjustmentsOptions } from '../../../helpers/adjustmentsOptions';

export default function TableAdjustments() {
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
          {adjustments.map(({ date, name, sum, category, _id }) => (
            <tr key={_id}>
              <td>{convertDate(date)}</td>
              <td>
                <EllipsisText text={name} length={40} />
              </td>
              <td className={styles.category}>
                {adjustmentsOptions[category]}
              </td>
              <td
                className={sum >= 0 ? styles.sumPositive : styles.sumNegative}
              >
                {Number.parseInt(sum, 10)} грн
              </td>
              <td
                className={styles.icon__bg}
                onClick={() => onDeleteAdjustments(_id)}
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
