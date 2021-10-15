import EllipsisText from 'react-ellipsis-text';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useEffect } from 'react';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from './Table.module.scss';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';

export default function Table() {
  const expense = useSelector(kapustaSelectors.getExpense);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kapustaOperations.fetchExpense());
  }, [dispatch, expense]);

  const onDeleteExpense = useCallback(
    id => {
      dispatch(kapustaOperations.deleteExpense(id));
    },
    [dispatch],
  );

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
              <td>{date}</td>
              <td>
                <EllipsisText text={name} length={40} />
              </td>
              <td className={styles.category}>{category}</td>
              <td className={styles.sumNegative}>- {sum} грн</td>
              <td
                className={styles.icon__bg}
                onClick={() => onDeleteExpense(_id)}
              >
                <Delete className={styles.icon__delete} />
              </td>
            </tr>
          ))}

          <tr>
            <td>05.09.2019</td>
            <td>
              <EllipsisText
                text={
                  'Метро (Lorem ipsum dolor sit, amet consectetur adipisicing  elit. Iste accusantium quaerat explicabo, recusandae facere sequi aperiam hic blanditiis repudiandae ea.'
                }
                length={40}
              />
            </td>
            <td className={styles.category}>Транспорт</td>
            <td className={styles.sumNegative}>- 30.00 грн.</td>
            <td className={styles.icon__bg}>
              <Delete className={styles.icon__delete} />
            </td>
          </tr>

          <tr>
            <td>05.09.2019</td>
            <td>Бананы</td>
            <td className={styles.category}>Продукты</td>
            <td className={styles.sumPositive}>50.00 грн.</td>
            <td className={styles.icon__bg}>
              <Delete className={styles.icon__delete} />
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className={styles.category}></td>
            <td className={styles.sumNegative}></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
