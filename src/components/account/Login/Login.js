import { useFormik } from 'formik';

import googleSymbol from '../../../images/google-symbol.svg';
import styles from '../account.module.scss';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'не правильный email';
  }

  if (!values.password) {
    errors.password = 'это обязательное поле';
  }

  return errors;
};

export default function Login() {
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <p className={`${styles.modalTitle} ${styles.modalTitleGoogle}`}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button className={styles.googleBtn} onClick={() => {}}>
          <img
            src={googleSymbol}
            alt="Google Symbol"
            className={styles.googleSymbol}
          />
          Google
        </button>
        <p className={styles.modalTitle}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.modalBody}>
          <div className={styles.modalGroup}>
            <label className={styles.modalLabel} htmlFor="inputEmail">
              {errors.email ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Электронная почта:
            </label>
            <input
              type="email"
              name="email"
              id="inputEmail"
              className={styles.modalInput}
              placeholder="your@email.com"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email ? (
              <div className={styles.error}>{errors.email}</div>
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
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.active}>Войти</button>
          <button type="button">Регистрация</button>
        </div>
      </form>
    </div>
  );
}
