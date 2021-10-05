import TabContainer from '../TabContainer';
import Controls from '../Controls';
import Tabs from '../Tabs';
import { ReactComponent as Delete } from '../../icons/delete.svg';
import styles from './Expense.module.scss';

export default function Expense() {
  return (
    <>
      <Tabs />

      <TabContainer>
        <Controls />

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Описание</th>
              <th>Категория</th>
              <th colspan="2">Сумма</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>05.09.2019</td>
              <td>
                Метро (Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Iste accusantium quaerat explicabo, recusandae facere sequi
                aperiam hic blanditiis repudiandae ea.{' '}
              </td>
              <td>Транспорт</td>
              <td className={styles.sum}>- 30.00 грн.</td>
              <td className={styles.icon__bg}>
                <Delete className={styles.icon__delete} />
              </td>
            </tr>

            <tr>
              <td>05.09.2019</td>
              <td>Бананы</td>
              <td>Продукты</td>
              <td className={styles.sum}>- 50.00 грн.</td>
              <td className={styles.icon__bg}>
                <Delete className={styles.icon__delete} />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.sum}></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TabContainer>
    </>
  );
}
