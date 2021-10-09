import { ReactComponent as Delete } from '../../images/delete.svg';
import styles from './Table.module.scss';

export default function Table() {
  return (
    <div className={styles.table__container}>
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
              Метро (Lorem ipsumNegative dolor sit, amet consectetur adipisicing
              elit. Iste accusantium quaerat explicabo, recusandae facere sequi
              aperiam hic blanditiis repudiandae ea.{' '}
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
