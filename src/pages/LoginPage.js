import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import useDebounce from '../helpers/useDebounce';
import { authOperations } from '../redux/operations';
import googleSymbol from '../images/google-symbol.svg';
import loginStyles from '../styles/Login.module.scss';
// import appStyles from '../styles/AppCommon.module.scss';
// import Header from '../components/Header';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email';
  }

  if (!values.password) {
    errors.password = 'Это обязательное поле';
  }

  return errors;
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = user => dispatch(authOperations.logIn(user));

  useEffect(() => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const sid = params.get('sid');

    if (accessToken && refreshToken && sid) {
      dispatch(
        authOperations.loginWithGoogle({ accessToken, refreshToken, sid }),
      );
    }
  }, [dispatch]);

  const { errors, values, handleSubmit, setFieldError, setFieldValue } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validateOnChange: false,
      validate,
      onSubmit: ({ email, password }) => onLogin({ email, password }),
    });

  const [onValidation, setOnValidation] = useState();

  const debounce = useDebounce(onValidation, 800);

  useEffect(() => {
    if (debounce) {
      const error = validate(values);

      setFieldError(debounce[0], error[debounce[0]]);
      setOnValidation();
    }
  }, [debounce, setFieldError, values]);

  const handleChange = ({ target: { name, value } }) => {
    setOnValidation([name, value]);

    setFieldValue(name, value);
  };

  return (
    // <div className={appStyles.loggedOutBg}>
    <>
      {/* // <Header /> */}
      <div className={loginStyles.modal}>
        <div className={loginStyles.modalBodyFirst}>
          <p
            className={`${loginStyles.modalTitle} ${loginStyles.modalTitleGoogle}`}
          >
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <a
            className={loginStyles.googleBtn}
            href="https://kapusta-backend.herokuapp.com/api/users/google"
          >
            <img
              src={googleSymbol}
              alt="Google Symbol"
              className={loginStyles.googleSymbol}
            />
            Google
          </a>
          <p className={loginStyles.modalTitle}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div className={loginStyles.modalBodySecond}>
            <div className={loginStyles.modalGroup}>
              <label className={loginStyles.modalLabel}>
                {errors.email ? (
                  <span className={loginStyles.errorStar}>*</span>
                ) : null}
                Электронная почта:
                <input
                  type="email"
                  name="email"
                  className={loginStyles.modalInput}
                  placeholder="your@email.com"
                  onChange={handleChange}
                  value={values.email}
                  autoComplete="off"
                />
                {errors.email ? (
                  <div className={loginStyles.error}>{errors.email}</div>
                ) : null}
              </label>
            </div>

            <div className={loginStyles.modalGroup}>
              <label className={loginStyles.modalLabel}>
                {errors.password ? (
                  <span className={loginStyles.errorStar}>*</span>
                ) : null}
                Пароль:
                <input
                  type="password"
                  name="password"
                  className={loginStyles.modalInput}
                  placeholder="Пароль"
                  onChange={handleChange}
                  value={values.password}
                  autoComplete="off"
                />
                {errors.password ? (
                  <div className={loginStyles.error}>{errors.password}</div>
                ) : null}
              </label>
            </div>
          </div>
          <div className={loginStyles.modalButtons}>
            <button
              type="submit"
              className={`${loginStyles.active} ${loginStyles.modalLogin}`}
            >
              Войти
            </button>
            <Link className={loginStyles.modalRegister} to="/register">
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </>
    // {/* </div> */}
  );
}
