import { ReactComponent as Hero } from './icons/Union.svg';
import { ReactComponent as HeroTablet } from './icons/Union-tablet.svg';
import { ReactComponent as HeroDesktop } from './icons/Union-desktop.svg';
import { ReactComponent as Cabbage } from './icons/Vector.svg';
import { ReactComponent as Shadow } from './icons/Ellipse.svg';

import styles from './MainComponent.module.scss';

export default function MainComponent() {
  const isLogin = false;

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero__container}>
        {!isLogin && (
          <>
            <div className={styles.hero}>
              <Hero />
            </div>
            <div className={styles.hero__tablet}>
              <HeroTablet />
            </div>
            <div className={styles.hero__desktop}>
              <HeroDesktop />
            </div>
            <h2 className={styles.description}>smart finance</h2>
          </>
        )}
      </div>
      <div className={styles.footer}>
        {!isLogin && (
          <>
            <div className={styles.cabbage1}>
              <Cabbage />
            </div>
            <div className={styles.cabbage2}>
              <Cabbage />
            </div>
            <div className={styles.cabbages__tablet}>
              <div className={styles.cabbage3}>
                <Cabbage />
              </div>
              <div className={styles.cabbage4}>
                <Cabbage />
              </div>
              <div className={styles.cabbage5}>
                <Cabbage />
              </div>
              <div className={styles.cabbage6}>
                <Cabbage />
              </div>
              <div className={styles.cabbage7}>
                <Cabbage />
              </div>
              <div className={styles.cabbage8}>
                <Cabbage />
              </div>
              <div className={styles.cabbage9}>
                <Cabbage />
              </div>
              <div className={styles.cabbage10}>
                <Cabbage />
              </div>
              <div className={styles.shadow1}>
                <Shadow />
              </div>
              <div className={styles.shadow2}>
                <Shadow />
              </div>
              <div className={styles.cabbages__desktop}>
                <div className={styles.cabbage15}>
                  <Cabbage />
                </div>
                <div className={styles.cabbage16}>
                  <Cabbage />
                </div>
                <div className={styles.cabbage13}>
                  <Cabbage />
                </div>
                <div className={styles.cabbage14}>
                  <Cabbage />
                </div>
              </div>
            </div>
          </>
        )}
        {isLogin && (
          <>
            <div className={styles.cabbage11}>
              <Cabbage />
            </div>
            <div className={styles.cabbage12}>
              <Cabbage />
            </div>
            <div className={styles.shadow3}>
              <Shadow />
            </div>
            <div className={styles.shadow4}>
              <Shadow />
            </div>
            <div className={styles.cabbages__desktop__isLogin}>
              <div className={styles.cabbage17}>
                <Cabbage />
              </div>
              <div className={styles.cabbage18}>
                <Cabbage />
              </div>
              <div className={styles.cabbage19}>
                <Cabbage />
              </div>
              <div className={styles.cabbage20}>
                <Cabbage />
              </div>
              <div className={styles.cabbage21}>
                <Cabbage />
              </div>
              <div className={styles.cabbage22}>
                <Cabbage />
              </div>
              <div className={styles.cabbage23}>
                <Cabbage />
              </div>
              <div className={styles.cabbage24}>
                <Cabbage />
              </div>
              <div className={styles.cabbage25}>
                <Cabbage />
              </div>
              <div className={styles.cabbage26}>
                <Cabbage />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
