import styles from './Expense.module.scss';

export default function Expense() {
  return (
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
            Iste accusantium quaerat explicabo, recusandae facere sequi aperiam
            hic blanditiis repudiandae ea.{' '}
          </td>
          <td>Транспорт</td>
          <td className={styles.sum}>- 30.00 грн.</td>
          <td>Delete</td>
        </tr>

        <tr>
          <td>05.09.2019</td>
          <td>Бананы</td>
          <td>Продукты</td>
          <td className="sum">- 50.00 грн.</td>
          <td>Delete</td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="sum"></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="sum"></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="sum"></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
