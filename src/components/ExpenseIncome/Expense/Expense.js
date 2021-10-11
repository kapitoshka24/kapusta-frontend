import { useState, useEffect } from 'react';

import TabContainer from '../TabContainer';
import Controls from '../Controls';
import ControlsMobile from '../ControlsMobile';
import Tabs from '../Tabs';
import TabsMobile from '../TabsMobile';
import Date from '../Date';
import EnterButton from '../../Report/EnterButton';
import Table from '../Table';
import TableMobile from '../TableMobile';
import MonthlySummary from '../MonthlySummary';
import styles from './Expense.module.scss';
import useWindowDementions from '../../../helpers/useWindowDementions';
import mainStyles from '../../../styles/AppComon.module.scss';

export default function Expense() {
  const [showControls, setShowControls] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showControls ? 'hidden' : 'auto';
  }, [showControls]);

  const toggleControls = () => {
    setShowControls(prevVal => !prevVal);
  };

  const showEnterButton = () => {
    setShowButton(true);
  };

  const { width } = useWindowDementions();

  return (
    <>
      {width < 768 ? <TabsMobile showButton={showEnterButton} /> : <Tabs />}

      <TabContainer>
        <div className={styles.date__mobile_container}>
          {width < 768 && <Date />}
          {width < 768 && showButton && (
            <EnterButton closeControls={toggleControls} />
          )}
        </div>

        {width < 768 ? null : <Controls />}
        {width < 768 && showControls && (
          <ControlsMobile closeControls={toggleControls} />
        )}

        <div className={styles.data__container}>
          {width < 768 ? null : <Table />}
          {width < 768 && showButton && <TableMobile />}

          {width >= 1280 && <MonthlySummary />}
        </div>
      </TabContainer>
      <div className={mainStyles.container}>
        {width < 1280 && <MonthlySummary />}
      </div>
    </>
  );
}
