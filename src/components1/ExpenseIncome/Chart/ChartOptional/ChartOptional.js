import styles from './ChartOptional.module.scss';

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

const calculateHeight = ({ data, size, idx }) => {
  const values = data.map(el => el.value);
  const maxValue = Math.max(...values);
  const height = Math.round((size * data[idx].value) / maxValue);
  return height;
};

export default function ChartOptional() {
  return (
    <div className={styles.chartWrapper}>
      <ul className={styles.list}>
        {data.map((el, idx, arr) => {
          const barBackgroundColor = idx % 3 ? '#FFDAC0' : '#FF751D';
          const barHeight = calculateHeight({
            data: arr,
            size: 328,
            idx,
          });

          return (
            <li
              className={styles.listItem}
              style={{ animationDelay: `${idx * 100}ms` }}
              key={el.name}
            >
              <p className={styles.label}>{`${el.value} грн`}</p>
              <div
                style={{
                  height: barHeight,
                  backgroundColor: barBackgroundColor,
                }}
                className={styles.bar}
              ></div>
              <p className={styles.label}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
