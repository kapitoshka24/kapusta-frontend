// import { Component } from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select';

import styles from './Select.module.scss';

const options = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'fun', label: 'Развлечения' },
  { value: 'house', label: 'Всё для дома' },
  { value: 'machinery', label: 'Техника' },
  { value: 'utils', label: 'Коммуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#F5F6FB',
      primary: '#F5F6FB',
    },
  };
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? '#F5F6FB' : '#52555F',
    color: state.isFocused ? '#52555F' : '#C7CCDC',
  }),
};

export default function Dropdown() {
  return (
    <>
      <Select
        options={options}
        theme={customTheme}
        className={styles.dropdown}
        styles={customStyles}
        placeholder="Категория товара"
        isClearable
      />
    </>
  );
}
