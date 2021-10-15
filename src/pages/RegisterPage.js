import { useEffect, useState } from 'react';
import Header from '../components/Header';
import appStyles from '../styles/AppComon.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import registerStyles from '../styles/Register.module.scss';
import auth from '../redux/operations/auth-operations';
import { authSelectors } from '../redux/selectors';
// import axios from 'axios';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Это обязательное поле';
  }

  if (!values.email) {
    errors.email = 'Это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email';
  }

  if (!values.password) {
    errors.password = 'Это обязательное поле';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать не меньше 6 символов';
  }

  if (!values.confirm) {
    errors.confirm = 'Это обязательное поле';
  } else if (values.password !== values.confirm) {
    errors.confirm = 'Пароли не совпадают';
  }

  return errors;
};

export default function RegisterPage({ location }) {
  // const fetchError = useSelector(authSelectors.getError);
  // const {onVerification, verificationStart} = useSelector(authSelectors.getEmailVerification);
  const { onVerification } = useSelector(authSelectors.getEmailVerification);
  const [timer, setTimer] = useState(59);

  const dispatch = useDispatch();
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validateOnChange: false,
    validate,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(auth.register({ name, email, password }));
      resetForm({ values });
    },
  });

  const resendEmailVerificationHandler = async () => {
    dispatch(auth.resendEmailVerification(values.email));
    setTimer(59);
  };

  useEffect(() => {
    if (onVerification) {
      const intervalId = setInterval(() => setTimer(timer - 1), 1000);

      if (timer === 0) {
        clearInterval(intervalId);
      }
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [onVerification, timer]);

  return (
    <div className={appStyles.loggedOutBg}>
      <Header />
      {onVerification ? (
        <div className={registerStyles.modalVerification}>
          <div className={registerStyles.modalBodyFirst}>
            <p className={registerStyles.modalTitleVerification}>
              На Ваш email (
              <span style={{ 'font-weight': 'bold' }}>{values.email}</span>)
              было отправлено письмо с дальнейшими инструкциями.
            </p>
            <p className={registerStyles.modalTitleVerification}>
              {timer ? (
                `Не пришло письмо? Отправить повторно через (${timer})`
              ) : (
                <button
                  className={registerStyles.btnResendVerification}
                  onClick={resendEmailVerificationHandler}
                >
                  Отправить письмо повторно.
                </button>
              )}
            </p>

            <div className={registerStyles.modalContinueBtn}>
              <Link
                className={`${registerStyles.modalLogin} ${registerStyles.active}`}
                to={{
                  pathname: `/login`,
                  state: { from: location },
                }}
                // onClick={() => dispatch(auth.onVerification(false))}
              >
                Продолжить
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={registerStyles.modal}>
          <p className={registerStyles.modalTitleRegister}>Регистрация</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className={registerStyles.modalBodyFirst}>
              <div className={registerStyles.modalGroup}>
                <label className={registerStyles.modalLabel}>
                  {errors.name ? (
                    <span className={registerStyles.errorStar}>*</span>
                  ) : null}
                  Имя:
                  <input
                    type="text"
                    name="name"
                    className={registerStyles.modalInput}
                    placeholder="Имя"
                    onChange={handleChange}
                    value={values.name}
                    autoComplete="off"
                  />
                  {errors.name ? (
                    <div className={registerStyles.error}>{errors.name}</div>
                  ) : null}
                </label>
              </div>

              <div className={registerStyles.modalGroup}>
                <label className={registerStyles.modalLabel}>
                  {errors.email ? (
                    <span className={registerStyles.errorStar}>*</span>
                  ) : null}
                  Электронная почта:
                  <input
                    type="email"
                    name="email"
                    className={registerStyles.modalInput}
                    placeholder="your@email.com"
                    onChange={handleChange}
                    value={values.email}
                    autoComplete="off"
                  />
                  {errors.email ? (
                    <div className={registerStyles.error}>{errors.email}</div>
                  ) : null}
                </label>
              </div>

              <div className={registerStyles.modalGroup}>
                <label className={registerStyles.modalLabel}>
                  {errors.password ? (
                    <span className={registerStyles.errorStar}>*</span>
                  ) : null}
                  Пароль:
                  <input
                    type="password"
                    name="password"
                    className={registerStyles.modalInput}
                    placeholder="Пароль"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password ? (
                    <div className={registerStyles.error}>
                      {errors.password}
                    </div>
                  ) : null}
                </label>
              </div>

              <div className={registerStyles.modalGroup}>
                <label className={registerStyles.modalLabel}>
                  {errors.confirm ? (
                    <span className={registerStyles.errorStar}>*</span>
                  ) : null}
                  Подтверждение пароля:
                  <input
                    type="password"
                    name="confirm"
                    className={registerStyles.modalInput}
                    placeholder="Подтвердите пароль"
                    onChange={handleChange}
                    value={values.confirm}
                  />
                  {errors.confirm ? (
                    <div className={registerStyles.error}>{errors.confirm}</div>
                  ) : null}
                </label>
              </div>
            </div>

            <div className={registerStyles.modalButtons}>
              <Link className={registerStyles.modalLogin} to="/login">
                Войти
              </Link>
              <button
                className={`${registerStyles.active} ${registerStyles.modalRegister}`}
              >
                Регистрация
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
