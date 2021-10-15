import EllipsisText from 'react-ellipsis-text';

import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from './TableMobile.module.scss';

export default function TableMobile() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.expense__thumb}>
          <p className={styles.name}>
            <EllipsisText
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
              length={40}
            />
          </p>

          <div className={styles.date__thumb}>
            <span className={styles.date}>05.09.2019</span>
            <p className={styles.category}>Транспорт</p>
          </div>
        </div>

        <div className={styles.sum__thumb}>
          <span className={styles.sum}>- 30.00 грн.</span>
          <div className={styles.icon__thumb}>
            <Delete className={styles.icon__delete} />
          </div>
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
          <div className={styles.icon__thumb}>
            <Delete className={styles.icon__delete} />
          </div>
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
          <div className={styles.icon__thumb}>
            <Delete className={styles.icon__delete} />
          </div>
        </div>
      </li>
    </ul>
  );
}
