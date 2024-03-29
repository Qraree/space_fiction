import React from 'react';
import styles from './Rocket.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import { IRocket, IRocketsListNew } from '@/types/rockets';
import { useAppSelector } from '@/redux/hooks';

interface RocketProps {
  rocket: IRocketsListNew;
}

const Rocket = ({ rocket }: RocketProps) => {
  const lang = useAppSelector((state) => state.settings.language);
  return (
    <LinkStyled href={`/rockets/${rocket.ROCKET_NAME}`}>
      <div className={styles.rocket}>
        <img src={rocket.ROCKET_PHOTO_URL} />
        <div className={styles.name}>
          <p>{rocket.ROCKET_NAME}</p>
        </div>
      </div>
    </LinkStyled>
  );
};

export default Rocket;
