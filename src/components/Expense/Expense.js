import { useState } from 'react';

import TabContainer from '../TabContainer';
import Controls from '../Controls';
import Tabs from '../Tabs';
import TabsMobile from '../TabsMobile';
import Date from '../Date';
import EnterButton from '../EnterButton';
import Table from '../Table';
import TableMobile from '../TableMobile';
// import ControlsMobile from '../ControlsMobile';
import styles from './Expense.module.scss';

export default function Expense() {
  const [showControls, setShowControls] = useState(false);

  const toggleControls = () => {
    setShowControls(prevVal => !prevVal);
  };

  const mobile = window.screen.width < 768;

  return (
    <>
      {mobile ? <TabsMobile /> : <Tabs />}

      <TabContainer>
        {mobile && (
          <div className={styles.date__mobile_container}>
            <Date />
            <EnterButton closeControls={toggleControls} />
          </div>
        )}

        {mobile ? null : <Controls />}

        {showControls && <Controls closeControls={toggleControls} />}

        {mobile ? <TableMobile /> : <Table />}
      </TabContainer>
    </>
  );
}
