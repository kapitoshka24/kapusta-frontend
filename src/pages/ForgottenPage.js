import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from '../helpers/useDebounce';

import { authSelectors } from '../redux/selectors';
import { authOperations } from '../redux/operations';

import forgottenStyles from '../styles/Forgotten.module.scss';

import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Это обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email';
  }

  return errors;
};

export default function ForgottenPage() {
  const dispatch = useDispatch();
  const fetchError = useSelector(authSelectors.getError);
  const { onReset, resetStart, email } = useSelector(
    authSelectors.getForgotten,
  );

  const [timer, setTimer] = useState(
    resetStart ? 60 - (Date.parse(new Date()) - resetStart) / 1000 : 60,
  );
  const { errors, values, handleSubmit, setFieldError, setFieldValue } =
    useFormik({
      initialValues: { email: '' },
      validateOnChange: false,
      validate,
      onSubmit: ({ email }) => dispatch(authOperations.forgotten(email)),
    });

  const [onValidation, setOnValidation] = useState();
  const debounce = useDebounce(onValidation, 750);

  const handleChange = ({ target: { name, value } }) => {
    setOnValidation([name, value]);

    setFieldValue(name, value);
  };

  const resendResetEmail = () => {
    dispatch(authOperations.forgotten(email));

    setTimer(59);
  };

  useEffect(() => {
    if (debounce) {
      const error = validate(values);

      setFieldError(debounce[0], error[debounce[0]]);
      setOnValidation();
    }
  }, [debounce, setFieldError, values]);

  useEffect(() => {
    if (onReset) {
      const intervalId = setInterval(() => setTimer(timer - 1), 1000);

      if (timer <= 0) {
        setTimer(null);
        clearInterval(intervalId);
      }
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [onReset, timer]);

  return (
    <div className={forgottenStyles.modal}>
      {onReset ? (
        <div className={forgottenStyles.modalVerification}>
          <div className={forgottenStyles.modalBodyFirst}>
            <p className={forgottenStyles.modalTitleVerification}>
              На Ваш email (<span>{email}</span>) было отправлено письмо с
              дальнейшими инструкциями.
            </p>
            <p className={forgottenStyles.modalTitleVerification}>
              {timer ? (
                `Не пришло письмо? Отправить повторно через (${timer})`
              ) : (
                <button
                  className={forgottenStyles.btnResendVerification}
                  onClick={resendResetEmail}
                >
                  Отправить письмо повторно.
                </button>
              )}
            </p>

            <Link
              className={`${forgottenStyles.modalContinueBtn} ${forgottenStyles.active}`}
              to={{
                pathname: `/login`,
              }}
            >
              Продолжить
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className={forgottenStyles.modalBodyFirst}>
            <p className={forgottenStyles.modalTitle}>
              Введите email для сброса пароля.
            </p>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div className={forgottenStyles.modalBodySecond}>
              <div className={forgottenStyles.modalGroup}>
                <label className={forgottenStyles.modalLabel}>
                  {errors.email ? (
                    <span className={forgottenStyles.errorStar}>*</span>
                  ) : null}
                  Электронная почта:
                  <input
                    type="email"
                    name="email"
                    className={forgottenStyles.modalInput}
                    placeholder="your@email.com"
                    onChange={handleChange}
                    value={values.email}
                    autoComplete="off"
                  />
                  {errors.email ? (
                    <div className={forgottenStyles.error}>{errors.email}</div>
                  ) : null}
                  {fetchError?.email ? (
                    <div className={forgottenStyles.error}>
                      {fetchError.email}
                    </div>
                  ) : null}
                </label>
              </div>
            </div>

            <div className={forgottenStyles.modalButtons}>
              <button
                type="submit"
                className={forgottenStyles.modalContinueBtn}
              >
                Отправить
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
