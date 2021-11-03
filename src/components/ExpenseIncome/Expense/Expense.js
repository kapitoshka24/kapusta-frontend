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
import MonthlySummaryIncome from '../MonthlySummaryIncome';
import styles from './Expense.module.scss';
import useWindowDementions from '../../../helpers/useWindowDementions';
import mainStyles from '../../../styles/AppCommon.module.scss';
import TableAdjustments from '../TableAdjustments';
import TableMobileAdjustments from '../TableMobileAdjustments';

export default function Expense() {
  const [showControls, setShowControls] = useState(false);
  const [date, setDate] = useState({ date: '' });

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
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Корректировки
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
                {width >= 1280 && <MonthlySummaryIncome />}
              </div>
            </TabContainer>
            <div className={mainStyles.container}>
              {width < 1280 && <MonthlySummaryIncome />}
            </div>
          </TabPanel>
          <TabPanel>
            <TabContainer>
              <div
                className={`${styles.data__container} ${styles.data__container_adjustment}`}
              >
                <TableAdjustments />
              </div>
            </TabContainer>
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
            <Tab className={styles.tab} selectedClassName={styles.tab__active}>
              Корректировки
            </Tab>
          </TabList>

          <TabPanel>
            <TabContainer>
              <div className={styles.date__mobile_container}>
                <Date setDate={setDate} />
                <EnterButton closeControls={toggleControls} />
              </div>
              {showControls && (
                <ControlsMobile
                  propDate={date}
                  closeControls={toggleControls}
                />
              )}
              <div className={styles.data__container}>
                <TableMobile />
              </div>
            </TabContainer>
          </TabPanel>

          <TabPanel>
            <TabContainer>
              <div className={styles.date__mobile_container}>
                <Date setDate={setDate} />
                <EnterButton closeControls={toggleControls} />
              </div>
              {showControls && (
                <ControlsMobileIncome
                  propDate={date}
                  closeControls={toggleControls}
                />
              )}
              <div className={styles.data__container}>
                <TableMobileIncome />
              </div>
            </TabContainer>
          </TabPanel>
          <TabPanel>
            <TabContainer>
              <div className={[styles.date__mobile_container_adjustment]}></div>
              <div className={styles.data__container}>
                <TableMobileAdjustments />
              </div>
            </TabContainer>
          </TabPanel>
        </Tabs>
      )}
    </>
  );
}
