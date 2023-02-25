import React from 'react';
import styles from './RocketArticleWrapper.module.scss';

interface RocketArticleWrapperProps {
  children?: React.ReactNode;
}

const RocketArticleWrapper = ({ children }: RocketArticleWrapperProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default RocketArticleWrapper;
