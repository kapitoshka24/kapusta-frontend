import styles from './ChartMobile.module.scss';

// const data = [
//   { _id: 'Свинина', sum: 5000 },
//   { _id: 'Говядина', sum: 4500 },
// ];

const calculateWidth = ({ data, size, idx }) => {
  const values = data.map(el => el.sum);
  const maxValue = Math.max(...values);
  const width = Math.round((size * data[idx].sum) / maxValue);
  const itemWidth = width <= size - 30 ? width + 20 : width;
  const barWidth = itemWidth === size ? itemWidth - 20 : itemWidth - 10;
  return [itemWidth, barWidth];
};

export default function ChartMobile({ data }) {
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
                animationDelay: `${idx * 100}ms`,
              }}
              key={el._id}
            >
              <div className={styles.labelWrapper}>
                <p className={styles.label}>{el._id}</p>
                <p className={styles.label}>{`${el.sum} грн`}</p>
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
