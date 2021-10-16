import notFoundStyles from '../styles/NotFound.module.scss';
import BackToMainPage from '../components/BackToMainPage';

export default function NotFoundPage() {
  return (
    <div className={notFoundStyles.container}>
      <h2 className={notFoundStyles.title}>404</h2>
      <p className={notFoundStyles.oops}>Уупс... Что-то пошло не так</p>
      <BackToMainPage />
    </div>
  );
}
