import React from 'react';
import styles from './Rocket.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import { IRocket } from '@/types/rockets';

interface RocketProps {
  rocket: IRocket;
}

const Rocket = ({ rocket }: RocketProps) => {
  return (
    <LinkStyled href={`/rockets/${rocket.name}`}>
      <div className={styles.rocket}>
        <img src={`http://localhost:5000/${rocket.img}`} />
        <div className={styles.name}>
          <p>{rocket.name}</p>
        </div>
      </div>
    </LinkStyled>
  );
};

export default Rocket;
