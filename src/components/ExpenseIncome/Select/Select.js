// import { Component } from 'react';
import { useState } from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select';

import styles from './Select.module.scss';

const options = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'housing', label: 'Всё для дома' },
  { value: 'technique', label: 'Техника' },
  { value: 'utility-communication', label: 'Коммуналка, связь' },
  { value: 'sports-hobbies', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#F5F6FB', // hover option background color
      neutral50: '#C7CCDC', // placeholder
    },
  };
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? '#F5F6FB' : '#52555F',
    color: state.isFocused ? '#52555F' : '#C7CCDC',
    paddingLeft: 20,
    paddindRight: 20,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#C7CCDC',
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export default function Dropdown({ setCategory }) {
  const [option, setOption] = useState({});

  setCategory(option.value);
  // const handleChange = setCategory;

  return (
    <>
      <Select
        options={options}
        theme={customTheme}
        className={styles.dropdown}
        styles={customStyles}
        placeholder="Категория товара"
        onChange={setOption}
        isClearable
      />
    </>
  );
}
