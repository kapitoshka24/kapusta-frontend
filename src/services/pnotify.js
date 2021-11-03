import { defaults, error, success, info, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

const settings = {
  title: false,
  maxTextHeight: null,
  width: '300px',
  delay: 2500,
};

alert({
  delay: 0,
  hide: true,
  text: '',
  addClass: 'no-visible',
  destroy: true,
});

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

export const registerError = () =>
  error({
    text: 'Не удалось зарегистрировать. Возможно, вы уже?:) Если нет, повторите запрос позже.',
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

export const enterError = () =>
  info({
    text: `Заполните описание, выберите категорию и введите сумму.`,
    ...settings,
  });

export const enterSum = () =>
  info({
    text: `Сумма должна быть от 0 до 999999999.`,
    ...settings,
  });

export const enterBalance = () =>
  info({
    text: `Новое значение баланса должно отличаться от текущего.`,
    ...settings,
  });
