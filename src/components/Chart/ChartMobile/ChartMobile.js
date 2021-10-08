import styles from './ChartMobile.module.scss';

const data = [
  { name: 'Свинина', value: 5000 },
  { name: 'Говядина', value: 4500 },
  { name: 'Курица', value: 3200 },
  { name: 'Рыба', value: 2100 },
  { name: 'Панини', value: 1800 },
  { name: 'Кофе', value: 1700 },
  { name: 'Спагетти', value: 1500 },
  { name: 'Шоколад', value: 800 },
  { name: 'Маслины', value: 500 },
  { name: 'Зелень', value: 300 },
];

const calculateWidth = ({ data, size, idx }) => {
  const values = data.map(el => el.value);
  const maxValue = Math.max(...values);
  const width = Math.round((size * data[idx].value) / maxValue);
  const itemWidth = width <= size - 30 ? width + 20 : width;
  const barWidth = itemWidth === size ? itemWidth - 20 : itemWidth - 10;
  return [itemWidth, barWidth];
};

export default function ChartMobile() {
  return (
    <>
      <ul className={styles.list}>
        {data.map((el, idx, arr) => {
          const barBackgroundColor = idx % 3 ? '#FFDAC0' : '#FF751D';
          const [itemWidth, barWidth] = calculateWidth({
            data: arr,
            size: 282,
            idx,
          });

          return (
            <li
              className={styles.listItem}
              style={{
                width: itemWidth,
              }}
              key={el.name}
            >
              <div className={styles.labelWrapper}>
                <p className={styles.label}>{el.name}</p>
                <p className={styles.label}>{`${el.value} грн`}</p>
              </div>
              <div
                className={styles.bar}
                style={{
                  width: barWidth,
                  backgroundColor: barBackgroundColor,
                }}
              ></div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
