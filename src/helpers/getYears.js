const getYears = (fromYear, toYear) => {
  const years = [fromYear];

  while (years[years.length - 1] !== toYear) {
    years.push(years[years.length - 1] + 1);
  }

  return years;
};

export default getYears;
