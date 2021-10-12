import { defaults, error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

const settings = {
  title: false,
  maxTextHeight: null,
  width: '300px',
  delay: 2000,
};

export const serverError = () =>
  error({
    text: `Ой, что-то пошло не так на сервере! Попробуйте еще раз немного позже`,
    ...settings,
  });

export const loginSuccess = () =>
  success({
    text: `Вы успешно вошли.`,
    ...settings,
  });

export const registerSuccess = email =>
  success({
    text: `Проверьте почту ${email} и пройдите верификацию.`,
    ...settings,
  });

export const registerError = () =>
  error({
    text: 'Не удалось зарегистрировать. Попробуйте еще раз немного позже.',
    ...settings,
  });

export const loginError = () =>
  error({
    text: 'Неправильные данные или не пройдена верификация.',
    ...settings,
  });

export const logoutSuccess = () =>
  success({
    text: 'Вы успешно вышли.',
    ...settings,
  });
