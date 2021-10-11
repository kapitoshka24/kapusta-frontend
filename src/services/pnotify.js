import { defaults, error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

const settings = {
  // title: false,
  // sticker: true,
  // maxTextHeight: null,
  // mouseReset: false,
  // styling: 'material',
  // icons: 'material',
  // delay: 2000,
  // hide: true,
  // closerHover: true,
  // stickerHover: true,
  // width: '300px',
  // mode: 'light',
  // addClass: 'material',
  // maxTextHeight: null,
  // mouseReset: false,
  // sticker: false,
  // width: '300px',
  // styling: 'angeler',
  // icons: 'angeler',
};

// const modules = new Map([
//   ...defaultModules,
//   {
//     title: false,
//     sticker: false,
//     maxTextHeight: null,
//     mouseReset: false,
//     delay: 2000,
//     width: '300px',
//   },
// ]);

export const existedContactError = (name, number) =>
  error({
    text: `Contact ${name}/${number} already exists.`,
    // modules,
  });

export const addContactSuccess = (name, number) =>
  success({
    text: `You successfully added ${name}/${number} to your phonebook.`,
    // ...settings,
  });

export const serverError = () =>
  error({
    text: `Sorry, something went wrong on a server side. Try again later!`,
    // modules,
  });

export const loginSuccess = () =>
  success({
    text: `You successfully logged in.`,
    // ...settings,
  });

export const registerSuccess = () =>
  success({
    text: `You successfully registered.`,
    // ...settings,
  });

export const authError = () =>
  error({
    text: 'Something went wrong! Try again later.',
    ...settings,
  });
