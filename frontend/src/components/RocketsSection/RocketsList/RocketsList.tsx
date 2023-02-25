import React, { useEffect, useState } from 'react';
import styles from './RocketsList.module.scss';
import { IRocket, IRocketsList } from '@/types/rockets';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Rocket from '@/components/RocketsSection/RocketsList/Rocket/Rocket';
import { useAppDispatch } from '@/redux/hooks';
import { addNewCountry, showModal } from '@/redux/features/rocket/rocketSlice';
import axios from 'axios';

interface RocketsListProps {
  rocketsSection: IRocketsList;
}

const RocketsList = ({ rocketsSection }: RocketsListProps) => {
  const [hideList, setHideList] = useState<boolean>(false);
  const [rocketList, setRocketList] = useState<IRocket[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:5000/rockets/by-country?country=${rocketsSection.id}`,
      );
      const data = response.data;
      setRocketList(data);
    })();
  });

  const handleList = () => {
    setHideList(!hideList);
  };

  const handleAddingRocket = () => {
    dispatch(showModal(rocketsSection.name));
  };

  return (
    <div className={styles.rocketsByCountry}>
      <div className={styles.countryHeader}>
        <div className={styles.flagName}>
          <h3>{rocketsSection.name}</h3>
          <div className={styles.flag}>
            <img src={`http://localhost:5000/${rocketsSection.flag}`} />
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
        {rocketList.map((rocket) => (
          <Rocket rocket={rocket} key={rocket.name} />
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
