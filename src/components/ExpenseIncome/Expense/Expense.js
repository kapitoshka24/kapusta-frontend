import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabContainer from '../TabContainer';
import Controls from '../Controls';
import ControlsMobile from '../ControlsMobile';
import ControlsIncome from '../ControlsIncome';
import ControlsMobileIncome from '../ControlsMobileIncome';
import Date from '../Date';
import EnterButton from '../../Report/EnterButton';
import Table from '../Table';
import TableMobile from '../TableMobile';
import TableIncome from '../TableIncome';
import TableMobileIncome from '../TableMobileIncome';
import MonthlySummary from '../MonthlySummary';
import styles from './Expense.module.scss';
import useWindowDementions from '../../../helpers/useWindowDementions';
import mainStyles from '../../../styles/AppComon.module.scss';

export default function Expense() {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showControls ? 'hidden' : 'auto';
  }, [showControls]);

  const toggleControls = () => {
    setShowControls(prevVal => !prevVal);
  };

  const { width } = useWindowDementions();

  return (
    <>
      {width >= 768 ? (
        <Tabs>
          <TabList className={styles.tab__container}>
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Расход
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Доход
            </Tab>
          </TabList>

          <TabPanel>
            <TabContainer>
              <Controls />
              <div className={styles.data__container}>
                <Table />
                {width >= 1280 && <MonthlySummary />}
              </div>
            </TabContainer>
            <div className={mainStyles.container}>
              {width < 1280 && <MonthlySummary />}
            </div>
          </TabPanel>

          <TabPanel>
            <TabContainer>
              <ControlsIncome />
              <div className={styles.data__container}>
                <TableIncome />
                {width >= 1280 && <MonthlySummary />}
              </div>
            </TabContainer>
            <div className={mainStyles.container}>
              {width < 1280 && <MonthlySummary />}
            </div>
          </TabPanel>
        </Tabs>
      ) : (
        <Tabs>
          <TabList className={styles.tab__container}>
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Расход
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Доход
            </Tab>
          </TabList>

          <TabPanel>
            <TabContainer>
              <div className={styles.date__mobile_container}>
                <Date />
                <EnterButton closeControls={toggleControls} />
              </div>
              {showControls && (
                <ControlsMobile closeControls={toggleControls} />
              )}
              <div className={styles.data__container}>
                <TableMobile />
              </div>
            </TabContainer>
          </TabPanel>

          <TabPanel>
            <TabContainer>
              <div className={styles.date__mobile_container}>
                <Date />
                <EnterButton closeControls={toggleControls} />
              </div>
              {showControls && (
                <ControlsMobileIncome closeControls={toggleControls} />
              )}
              <div className={styles.data__container}>
                <TableMobileIncome />
              </div>
            </TabContainer>
          </TabPanel>
        </Tabs>
      )}
    </>
  );
}
