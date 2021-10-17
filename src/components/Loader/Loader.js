import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <Spinner
      visible={true}
      className={styles.LoaderMain}
      type="Triangle"
      color="#ff751d"
      height={80}
      width={80}
    />
  );
}
