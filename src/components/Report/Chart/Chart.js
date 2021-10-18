import useWindowDementions from '../../../helpers/useWindowDementions';
import ChartMobile from '../../Report/Chart/ChartMobile';
import ChartOptional from '../../Report/Chart/ChartOptional';
import styles from './Chart.module.scss';
// import { useSelector } from 'react-redux';
// import kapustaSelectors from '../../../redux/selectors/kapusta-selectors';

export default function Chart({ data = [] }) {
  // const data = useSelector(kapustaSelectors.getCategotyDetails);
  const { width } = useWindowDementions();
  return (
    <div className={styles.container}>
      {width < 768 ? (
        <ChartMobile data={data} />
      ) : (
        <ChartOptional data={data} />
      )}
    </div>
  );
}
