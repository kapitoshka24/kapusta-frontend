import { useState } from 'react';

import TabContainer from '../TabContainer';
import Controls from '../Controls';
import ControlsMobile from '../ControlsMobile';
import Tabs from '../Tabs';
import TabsMobile from '../TabsMobile';
import Date from '../Date';
import EnterButton from '../EnterButton';
import Table from '../Table';
import TableMobile from '../TableMobile';
import MonthlySummary from '../MonthlySummary';
import styles from './Expense.module.scss';
import useWindowWidth from '../../helpers/useWindowWidth';

export default function Expense() {
  const [showControls, setShowControls] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleControls = () => {
    setShowControls(prevVal => !prevVal);
  };

  const showEnterButton = () => {
    setShowButton(true);
  };

  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 768 ? (
        <TabsMobile showButton={showEnterButton} />
      ) : (
        <Tabs />
      )}

      <TabContainer>
        <div className={styles.date__mobile_container}>
          {windowWidth < 768 && <Date />}
          {windowWidth < 768 && showButton && (
            <EnterButton closeControls={toggleControls} />
          )}
        </div>

        {windowWidth < 768 ? null : <Controls />}
        {windowWidth < 768 && showControls && (
          <ControlsMobile closeControls={toggleControls} />
        )}

        <div className={styles.data__container}>
          {windowWidth < 768 ? null : <Table />}
          {windowWidth < 768 && showButton && <TableMobile />}

          <MonthlySummary />
        </div>
      </TabContainer>
    </>
  );
}
