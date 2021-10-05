import { useFormik } from 'formik';
import styles from './register.module.scss';
const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'это обязательное поле';
  }

  if (!values.email) {
    errors.email = 'это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'не правильный email';
  }

  if (!values.password) {
    errors.password = 'это обязательное поле';
  } else if (values.password.length < 6) {
    errors.password = 'пароль должен быть не меньше 6 символов';
  }

  if (!values.confirm) {
    errors.confirm = 'это обязательное поле';
  } else if (values.password !== values.confirm) {
    errors.confirm = 'пароли не совпадают';
  }

  return errors;
};

export default function Register() {
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.register}>
      <div className={styles.registerBody}>
        <p className={styles.registerTitleRegister}>Регистрация</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.registerBody}>
          <div className={styles.registerGroup}>
            <label className={styles.registerLabel} htmlFor="inputName">
              {errors.name ? <span className={styles.errorStar}>*</span> : null}
              Имя:
            </label>
            <input
              type="text"
              id="inputName"
              name="name"
              className={styles.registerInput}
              placeholder="Имя"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name ? (
              <div className={styles.error}>{errors.name}</div>
            ) : null}
          </div>

          <div className={styles.registerGroup}>
            <label className={styles.registerLabel} htmlFor="inputEmail">
              {errors.email ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Электронная почта:
            </label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              className={styles.registerInput}
              placeholder="your@email.com"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
          </div>

          <div className={styles.registerGroup}>
            <label className={styles.registerLabel} htmlFor="inputPassword">
              {errors.password ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Пароль:
            </label>
            <input
              type="password"
              id="inputPassword"
              name="password"
              className={styles.registerInput}
              placeholder="Пароль"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
          </div>

          <div className={styles.registerGroup}>
            <label className={styles.registerLabel} htmlFor="inputConfirm">
              {errors.confirm ? (
                <span className={styles.errorStar}>*</span>
              ) : null}
              Подтверждение пароля:
            </label>
            <input
              type="password"
              id="inputConfirm"
              name="confirm"
              className={styles.registerInput}
              placeholder="Подтвердите пароль"
              onChange={handleChange}
              value={values.confirm}
            />
            {errors.confirm ? (
              <div className={styles.error}>{errors.confirm}</div>
            ) : null}
          </div>
        </div>

        <div className={styles.registerButtons}>
          <button>Войти</button>
          <button className={styles.active}>Регистрация</button>
        </div>
      </form>
    </div>
  );
}
