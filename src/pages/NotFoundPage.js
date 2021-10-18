import notFoundstyles from '../styles/NotFound.module.scss';
import BackToMainPage from '../components/BackToMainPage';

export default function NotFoundPage() {
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
