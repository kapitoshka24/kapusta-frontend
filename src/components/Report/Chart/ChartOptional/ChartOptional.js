import styles from './ChartOptional.module.scss';

const calculateHeight = ({ data, size, idx }) => {
  const values = data.map(el => el.sum);
  const maxValue = Math.max(...values);
  const height = Math.round((size * data[idx].sum) / maxValue);
  return height;
};

export default function ChartOptional({ data }) {
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
              key={el._id}
            >
              <p className={styles.label}>{`${parseFloat(el.sum).toFixed(
                2,
              )} грн`}</p>
              <div
                style={{
                  height: barHeight,
                  backgroundColor: barBackgroundColor,
                }}
                className={styles.bar}
              ></div>
              <p className={styles.label}>{el._id}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
