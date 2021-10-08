import { ReactComponent as Hero } from './icons/Union.svg';
import { ReactComponent as HeroTablet } from './icons/Union-tablet.svg';
import { ReactComponent as HeroDesktop } from './icons/Union-desktop.svg';

import styles from './MainComponent.module.scss';

export default function MainComponent() {
  const isLogin = false;

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.hero__container} ${
          isLogin ? styles.hero__login : ''
        }`}
      >
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
      <div
        className={`${styles.footer} ${isLogin ? styles.footer__login : ''}`}
      ></div>
    </div>
  );
}
