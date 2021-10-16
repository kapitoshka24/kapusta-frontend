// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/selectors';
// import Header from '../components/Header';
import notFoundstyles from '../styles/NotFound.module.scss';
// import appStyles from '../styles/AppComon.module.scss';
import BackToMainPage from '../components/BackToMainPage';

export default function NotFoundPage() {
  //   const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={notFoundstyles.container}>
        <h2 className={notFoundstyles.title}>404</h2>
        <p className={notFoundstyles.oops}>Уупс... Что-то пошло не так</p>
        <BackToMainPage />
      </div>
    </>
  );
}
