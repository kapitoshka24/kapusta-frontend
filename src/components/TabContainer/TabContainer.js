import styles from './TabContainer.module.scss';

export default function TabContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
