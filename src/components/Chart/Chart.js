import useWindowWidth from '../../helpers/useWindowWidth';

import ChartMobile from './ChartMobile';
import ChartOptional from './ChartOptional';

export default function Chart() {
  const windowWidth = useWindowWidth();
  return <div>{windowWidth <= 320 ? <ChartMobile /> : <ChartOptional />}</div>;
}
