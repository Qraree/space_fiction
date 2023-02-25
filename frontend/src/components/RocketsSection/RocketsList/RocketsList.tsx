import React, { useState } from 'react';
import styles from './RocketsList.module.scss';
import { IRocketsList } from '@/types/rockets';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Rocket from '@/components/RocketsSection/RocketsList/Rocket/Rocket';
import { useAppDispatch } from '@/redux/hooks';
import { addNewCountry, showModal } from '@/redux/features/rocket/rocketSlice';

interface RocketsListProps {
  rocketsSection: IRocketsList;
}

const RocketsList = ({ rocketsSection }: RocketsListProps) => {
  const [hideList, setHideList] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleList = () => {
    setHideList(!hideList);
  };

  const handleAddingRocket = () => {
    dispatch(showModal(rocketsSection.countryName));
  };

  return (
    <div className={styles.rocketsByCountry}>
      <div className={styles.countryHeader}>
        <div className={styles.flagName}>
          <h3>{rocketsSection.countryName}</h3>
          <div className={styles.flag}>
            <img src={rocketsSection.countryFlag} />
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
        {rocketsSection.rockets.map((rocket) => (
          <Rocket rocket={rocket} key={rocket.title} />
        ))}
        <div
          className={classNames(styles.rocket, styles.addRocket)}
          onClick={handleAddingRocket}
        >
          <p>New rocket</p>
        </div>
      </div>
    </div>
  );
};

export default RocketsList;
