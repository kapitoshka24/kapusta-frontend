import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { authSelectors } from '../redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../redux/operations/auth-operations';
import GoogleRegistration from '../components/GoogleRegistration';
import registerStyles from '../styles/Register.module.scss';
import useDebounce from '../helpers/useDebounce';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Это обязательное поле';
  } else if (values.name.length < 3 || values.name.length > 40) {
    errors.name = 'Имя должно быть от 3 до 40 символов';
  } else if (
    !/^[A-z]+(?:\s+[A-z]+)*$|^[А-я]+(?:\s+[А-я]+)*$/.test(values.name)
  ) {
    errors.name = 'Недопустимые символы в имени';
  }

  if (!values.email) {
    errors.email = 'Это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email';
  } else if (
    !/[com]{3}$/i.test(values.email) &&
    !/[ua]{2}$/i.test(values.email) &&
    !/[net]{3}$/i.test(values.email)
  ) {
    errors.email = 'Неправильный домен';
  }

  if (!values.password) {
    errors.password = 'Это обязательное поле';
  } else if (values.password.length < 6 || values.password.length > 30) {
    errors.password = 'Пароль должен содержать от 6 до 30 символов';
  }

  if (!values.confirm) {
    errors.confirm = 'Это обязательное поле';
  } else if (values.password !== values.confirm) {
    errors.confirm = 'Пароли не совпадают';
  }

  return errors;
};

export default function RegisterPage({ location }) {
  const dispatch = useDispatch();
  const fetchError = useSelector(authSelectors.getError);
  const { onVerification, verificationStart, email } = useSelector(
    authSelectors.getEmailVerification,
  );
  const [timer, setTimer] = useState(
    verificationStart
      ? 60 - (Date.parse(new Date()) - verificationStart) / 1000
      : 60,
  );

  const { errors, values, handleSubmit, setFieldError, setFieldValue } =
    useFormik({
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
    dispatch(auth.resendEmailVerification(email));

    setTimer(59);
  };

  useEffect(() => {
    if (onVerification) {
      const intervalId = setInterval(() => setTimer(timer - 1), 1000);

      if (timer <= 0) {
        setTimer(null);
        clearInterval(intervalId);
      }
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [onVerification, timer]);

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

  return onVerification ? (
    <div className={registerStyles.modalVerification}>
      <div className={registerStyles.modalBodyFirst}>
        <p className={registerStyles.modalTitleVerification}>
          На Ваш email (<span>{email}</span>) было отправлено письмо с
          дальнейшими инструкциями.
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
            }}
          >
            Продолжить
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className={registerStyles.modal}>
      <div className={registerStyles.modalBodyFirst}>
        <p
          className={`${registerStyles.modalTitle} ${registerStyles.modalTitleGoogle}`}
        >
          Вы можете зарегистрироваться с помощью Google Account:
        </p>
        <GoogleRegistration />
        <p className={registerStyles.modalTitle}>Или с помощью e-mail:</p>
      </div>

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
              {fetchError?.email ? (
                <>
                  <span className={registerStyles.error}>
                    {fetchError.email}
                  </span>
                  <Link
                    to="/forgotten"
                    className={registerStyles.btnResendVerification}
                    onClick={() => dispatch(auth.clearErrors())}
                  >
                    Забыли пароль?
                  </Link>
                </>
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
                <div className={registerStyles.error}>{errors.password}</div>
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
            type="submit"
            className={`${registerStyles.active} ${registerStyles.modalRegister}`}
            onClick={() => dispatch(auth.clearErrors())}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}
