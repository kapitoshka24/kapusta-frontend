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

export default function ResetPasswordPage({ match: { params } }) {
  const verificationToken = params.verificationToken ?? null;
  const { success } = useSelector(authSelectors.getResetPassword);

  const dispatch = useDispatch();

  const { errors, values, handleSubmit, setFieldError, setFieldValue } =
    useFormik({
      initialValues: { password: '', confirm: '' },
      validateOnChange: false,
      validate,
      onSubmit: ({ password }) => {
        dispatch(authOperations.resetPassword(password, verificationToken));
      },
    });

  const [onValidation, setOnValidation] = useState();
  const debounce = useDebounce(onValidation, 750);

  const handleChange = ({ target: { name, value } }) => {
    setOnValidation([name, value]);

    setFieldValue(name, value);
  };

  useEffect(() => {
    if (debounce) {
      const error = validate(values);

      setFieldError(debounce[0], error[debounce[0]]);
      setOnValidation();
    }
  }, [debounce, setFieldError, values]);

  return (
    <div className={forgottenStyles.modal}>
      {success ? (
        <div className={forgottenStyles.modalVerification}>
          <div className={forgottenStyles.modalBodyFirst}>
            <p className={forgottenStyles.modalTitleReset}>
              Пароль успешно изменён.
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
            <p className={forgottenStyles.modalTitle}>Введите новый пароль.</p>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div className={forgottenStyles.modalBodySecond}>
              <div className={forgottenStyles.modalGroup}>
                <label className={forgottenStyles.modalLabel}>
                  {errors.password ? (
                    <span className={forgottenStyles.errorStar}>*</span>
                  ) : null}
                  Пароль:
                  <input
                    type="password"
                    name="password"
                    className={forgottenStyles.modalInput}
                    placeholder="Введите пароль"
                    onChange={handleChange}
                    value={values.password}
                    autoComplete="off"
                  />
                  {errors.password ? (
                    <div className={forgottenStyles.error}>
                      {errors.password}
                    </div>
                  ) : null}
                </label>
              </div>
              <div className={forgottenStyles.modalGroup}>
                <label className={forgottenStyles.modalLabel}>
                  {errors.confirm ? (
                    <span className={forgottenStyles.errorStar}>*</span>
                  ) : null}
                  Подтверждение:
                  <input
                    type="password"
                    name="confirm"
                    className={forgottenStyles.modalInput}
                    placeholder="Введите подтверждение"
                    onChange={handleChange}
                    value={values.confirm}
                    autoComplete="off"
                  />
                  {errors.confirm ? (
                    <div className={forgottenStyles.error}>
                      {errors.confirm}
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
                Сохранить
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
