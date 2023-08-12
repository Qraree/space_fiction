import React, { useState } from 'react';
import styles from './RocketsList.module.scss';
import { IRocketListItem } from '@/types/rockets';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Rocket from '@/components/RocketsSection/RocketsList/Rocket/Rocket';

interface RocketsListProps {
  country: IRocketListItem;
}

const RocketsList = ({ country }: RocketsListProps) => {
  const [hideList, setHideList] = useState<boolean>(false);

  const handleList = () => {
    setHideList(!hideList);
  };

  return (
    <div className={styles.rocketsByCountry}>
      <div className={styles.countryHeader}>
        <div className={styles.flagName}>
          <h3>{country.NAME}</h3>
          <div className={styles.flag}>
            <img src={country.PHOTO_URL} alt="Country flag" />
          </div>
        </div>
        <button onClick={handleList}>
          {hideList ? <BsChevronDown /> : <BsChevronUp />}
        </button>
      </div>
      <div
        className={classNames(styles.rockets, {
          [styles.rocketsHide]: hideList,
        })}
      >
        {country.ROCKETS.map((rocket) => (
          <Rocket rocket={rocket} key={rocket.ROCKET_NAME} />
        ))}
      </div>
    </div>
  );
};

export default RocketsList;
