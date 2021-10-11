// import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import styles from './Register.module.scss';
import auth from '../../../redux/operations/auth-operations';
import { authSelectors } from '../../../redux/selectors';

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

export default function Register() {
  const fetchError = useSelector(authSelectors.getError);
  const [toLogin, setToLogin] = useState(false);
  const dispatch = useDispatch();
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validate,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(auth.register({ name, email, password }));
      resetForm();

      !fetchError && setToLogin(true);
    },
  });

  return (
    <div className={styles.modal}>
      <p className={styles.modalTitleRegister}>Регистрация</p>

      <form onSubmit={handleSubmit} noValidate>
        {toLogin ? <Redirect to="/login" /> : null}
        <div className={styles.modalBodyFirst}>
          <div className={styles.modalGroup}>
            <label className={styles.modalLabel}>
              {errors.name ? <span className={styles.errorStar}>*</span> : null}
              Имя:
              <input
                type="text"
                name="name"
                className={styles.modalInput}
                placeholder="Имя"
                onChange={handleChange}
                value={values.name}
                autoComplete="off"
              />
              {errors.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}
            </label>
          </div>

          <div className={styles.modalGroup}>
            <label className={styles.modalLabel}>
              {errors.email ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Электронная почта:
              <input
                type="email"
                name="email"
                className={styles.modalInput}
                placeholder="your@email.com"
                onChange={handleChange}
                value={values.email}
                autoComplete="off"
              />
              {errors.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
            </label>
          </div>

          <div className={styles.modalGroup}>
            <label className={styles.modalLabel}>
              {errors.password ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Пароль:
              <input
                type="password"
                name="password"
                className={styles.modalInput}
                placeholder="Пароль"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </label>
          </div>

          <div className={styles.modalGroup}>
            <label className={styles.modalLabel}>
              {errors.confirm ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Подтверждение пароля:
              <input
                type="password"
                name="confirm"
                className={styles.modalInput}
                placeholder="Подтвердите пароль"
                onChange={handleChange}
                value={values.confirm}
              />
              {errors.confirm ? (
                <div className={styles.error}>{errors.confirm}</div>
              ) : null}
            </label>
          </div>
        </div>

        <div className={styles.modalButtons}>
          <Link className={styles.modalLogin} to="/login">
            Войти
          </Link>
          <button className={`${styles.active} ${styles.modalRegister}`}>
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}
