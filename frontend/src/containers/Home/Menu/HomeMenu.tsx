import React from 'react';
import styles from './HomeMenu.module.scss';
import { WEBSITE_SECTIONS } from '@/constants/home';
import SectionTab from '@/components/HomeSection/SectionTab/SectionTab';

const HomeMenu = () => {
  return (
    <div className={styles.historyContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h1>Welcome, wanderer!</h1>
          <div className={styles.homeMenuText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in lacus et tortor posuere euismod. Suspendisse potenti. Vivamus
              accumsan magna in neque tempor pretium. Morbi metus libero,
              ullamcorper et mi quis, dignissim dapibus purus. Nam in euismod
              erat. Etiam feugiat nunc non rhoncus facilisis. Vestibulum mattis
              velit quis erat auctor, vitae placerat felis scelerisque. Nam
              purus lectus, sollicitudin ut justo eu, luctus pellentesque augue.
              Nullam fringilla pretium semper.
            </p>
          </div>
          <div className={styles.tabsContainer}>
            {WEBSITE_SECTIONS.map((section) => (
              <SectionTab section={section} key={section.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
