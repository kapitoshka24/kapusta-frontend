import useWindowWidth from '../../../helpers/useWindowWidth';
import ChartMobile from './ChartMobile';
import ChartOptional from './ChartOptional';
import styles from './Chart.module.scss';

export default function Chart() {
  const windowWidth = useWindowWidth();
  return (
    <div className={styles.container}>
      {windowWidth < 768 ? <ChartMobile /> : <ChartOptional />}
    </div>
  );
}
