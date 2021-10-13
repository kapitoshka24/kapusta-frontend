import useWindowDementions from '../../../helpers/useWindowDementions';
import ChartMobile from './ChartMobile';
import ChartOptional from './ChartOptional';
import styles from './Chart.module.scss';

export default function Chart() {
  const { width } = useWindowDementions();
  return (
    <div className={styles.container}>
      {width < 768 ? <ChartMobile /> : <ChartOptional />}
    </div>
  );
}
