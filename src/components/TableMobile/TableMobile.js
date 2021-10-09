import { ReactComponent as Delete } from '../../icons/delete.svg';
import styles from './TableMobile.module.scss';

export default function TableMobile() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.expense__thumb}>
          <p className={styles.name}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.date__thumb}>
            <span className={styles.date}>05.09.2019</span>
            <p className={styles.category}>Транспорт</p>
          </div>
        </div>

        <div className={styles.sum__thumb}>
          <span className={styles.sum}>- 30.00 грн.</span>
          <Delete className={styles.icon__delete} />
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.expense__thumb}>
          <p className={styles.name}>Метро</p>

          <div className={styles.date__thumb}>
            <span className={styles.date}>05.09.2019</span>
            <p className={styles.category}>Транспорт</p>
          </div>
        </div>

        <div className={styles.sum__thumb}>
          <span className={styles.sum}>- 30.00 грн.</span>
          <Delete className={styles.icon__delete} />
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.expense__thumb}>
          <p className={styles.name}>Метро</p>

          <div className={styles.date__thumb}>
            <span className={styles.date}>05.09.2019</span>
            <p className={styles.category}>Транспорт</p>
          </div>
        </div>

        <div className={styles.sum__thumb}>
          <span className={styles.sum}>- 30.00 грн.</span>
          <Delete className={styles.icon__delete} />
        </div>
      </li>
    </ul>
  );
}
