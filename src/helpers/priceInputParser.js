// const priceFormat = val => {
//   if (val.split('.')[0].length === 4) {
//     val = val[0] + ' ' + val.split('').splice(1).join('');
//   } else if (val.split('.')[0].length === 5) {
//     val = val.slice(0, 2) + ' ' + val.split('').splice(2).join('');
//   } else if (val.split('.')[0].length === 6) {
//     val = val.slice(0, 3) + ' ' + val.split('').splice(3).join('');
//   } else if (val.split('.')[0].length === 7) {
//     val =
//       val[0] + ' ' + val.slice(1, 4) + ' ' + val.split('').splice(4).join('');
//   }

//   return val;
// };

export const inputChangeHandler = value => {
  if (!/^[0-9]+\.[0-9]{2}$/i.test(value)) {
    let v = '';

    if (value[0] === '.') {
      v = `0${value}`;
    }

    value.split('').forEach(i => {
      if (/^[0-9]$/i.test(i) || i === '.') {
        if (i === '.') {
          if (!v.includes('.')) {
            v = v + i;
          }
        } else {
          if (!v.includes('.')) {
            v = v + i;
          } else {
            if (v.split('.')[1].length < 2) {
              v = v + i;
            }
          }
        }
      }
    });

    return v;
    // return priceFormat(v);
  }

  return value;
  // return priceFormat(value);
};

export const inputBlurHandler = value => {
  if (!value) {
    return value;
  } else if (!value.includes('.')) {
    return `${value}.00`;
  } else if (!value.split('.')[1]?.length) {
    return `${value}00`;
  } else if (value.split('.')[1]?.length === 1) {
    return `${value}0`;
  } else {
    return value;
  }
};
