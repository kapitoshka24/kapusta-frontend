import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import authOperations from '../../redux/operations/auth-operations.js';
import authSelectors from '../../redux/selectors/auth-selectors';

import styles from './Register.module.scss';
import { useEffect } from 'react';

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

export default function Register({ location }) {
  const dispatch = useDispatch();
  const userError = useSelector(authSelectors.selectUserError);
  const onVerification = useSelector(authSelectors.selectUserOnVerification);

  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: 'Aaa',
      email: 'aa@aa.ua',
      password: 'aaaaaa',
      confirm: 'aaaaaa',
    },
    validate,
    onSubmit: values => {
      dispatch(authOperations.register(values));
    },
  });

  return (
    <div className={styles.modal}>
      {!onVerification ? (
        <>
          <p className={styles.modalTitleRegister}>Регистрация</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.modalBodyFirst}>
              <div className={styles.modalGroup}>
                <label className={styles.modalLabel} htmlFor="inputName">
                  {errors.name ? (
                    <span className={styles.errorStar}>*</span>
                  ) : null}
                  Имя:
                </label>
                <input
                  type="text"
                  id="inputName"
                  name="name"
                  className={styles.modalInput}
                  placeholder="Имя"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name ? (
                  <div className={styles.error}>{errors.name}</div>
                ) : null}
              </div>

              <div className={styles.modalGroup}>
                <label className={styles.modalLabel} htmlFor="inputEmail">
                  {errors.email ? (
                    <span className={styles.errorStar}>*</span>
                  ) : null}
                  Электронная почта:
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  name="email"
                  className={styles.modalInput}
                  placeholder="your@email.com"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}
                {userError ? (
                  <span className={styles.error}>
                    {userError}
                    {/* <Link
            to={{
              pathname: `/forgotten`,
              state: { from: this.props.location },
            }}
          >
            Забыли пароль?
          </Link> */}
                  </span>
                ) : null}
              </div>

              <div className={styles.modalGroup}>
                <label className={styles.modalLabel} htmlFor="inputPassword">
                  {errors.password ? (
                    <span className={styles.errorStar}>*</span>
                  ) : null}
                  Пароль:
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  name="password"
                  className={styles.modalInput}
                  placeholder="Пароль"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password ? (
                  <div className={styles.error}>{errors.password}</div>
                ) : null}
              </div>

              <div className={styles.modalGroup}>
                <label className={styles.modalLabel} htmlFor="inputConfirm">
                  {errors.confirm ? (
                    <span className={styles.errorStar}>*</span>
                  ) : null}
                  Подтверждение пароля:
                </label>
                <input
                  type="password"
                  id="inputConfirm"
                  name="confirm"
                  className={styles.modalInput}
                  placeholder="Подтвердите пароль"
                  onChange={handleChange}
                  value={values.confirm}
                />
                {errors.confirm ? (
                  <div className={styles.error}>{errors.confirm}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.modalButtons}>
              <Link
                className={styles.modalLogin}
                to={{
                  pathname: `/login`,
                  state: { from: location },
                }}
              >
                Войти
              </Link>
              <button
                type="submit"
                className={`${styles.active} ${styles.modalRegister}`}
              >
                Регистрация
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <p className={styles.modalTitleVerification}>
            На Ваш email было отправлено письмо с дальнейшими инструкциями
          </p>

          <div className={styles.modalContinueBtn}>
            <Link
              className={`${styles.modalLogin} ${styles.active}`}
              to={{
                pathname: `/login`,
                state: { from: location },
              }}
              onClick={() => dispatch(authOperations.onVerification(false))}
            >
              Продолжить
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
