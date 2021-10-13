import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/selectors';

import Header from '../components/Header';

import styles from '../styles/NotFound.module.scss';

export default function NotFound(...rest) {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(rest);
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header notFound={true} />
      <div className={styles.container}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.oops}>Уупс... Что-то пошло не так</p>
      </div>
    </div>
  );
}
