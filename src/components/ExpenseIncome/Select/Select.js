import { useEffect, useState } from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select';

import styles from './Select.module.scss';

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

export default function Dropdown({ setCategory, options }) {
  const [option, setOption] = useState({});

  useEffect(() => {
    setCategory(option.value);
  }, [setCategory, option]);

  return (
    <>
      <Select
        options={options}
        theme={customTheme}
        className={styles.dropdown}
        styles={customStyles}
        placeholder="Категория товара"
        onChange={setOption}
        // isClearable
      />
    </>
  );
}
