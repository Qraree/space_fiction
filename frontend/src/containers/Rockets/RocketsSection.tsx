import React, { useEffect, useState } from 'react';
import RocketsList from '@/components/RocketsSection/RocketsList/RocketsList';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IRocketsList } from '@/types/rockets';
import axios from 'axios';
import styles from './RocketsSection.module.scss';
import { showModal } from '@/redux/features/rocket/rocketSlice';
import { MODAL_MODE } from '@/constants/rockets';
import { rocketAPI } from '@/redux/services/RocketService';

const RocketsSection = () => {
  const rocketUpdate = useAppSelector((state) => state.rocket.updateRockets);
  const [list, setList] = useState<IRocketsList[]>([]);
  const [updateRockets, setUpdateRockets] = useState<boolean>(false);
  const { data: rocketCountries } =
    rocketAPI.endpoints.fetchAllRocketsCountries.useQuery('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get('http://localhost:5000/rockets-country');
    //   const data = response.data;
    //   setList(data);
    // })();
    setUpdateRockets((prevState) => !prevState);
  }, [rocketUpdate]);

  const handleAddCountry = () => {
    dispatch(showModal({ modalMode: MODAL_MODE.COUNTRY }));
  };

  return (
    <>
      <h1>Rockets</h1>
      <hr />
      {rocketCountries &&
        rocketCountries.map((rocketsSection) => (
          <RocketsList
            rocketsSection={rocketsSection}
            key={rocketsSection.name}
          />
        ))}
      <button className={styles.button} onClick={handleAddCountry}>
        Add new country
      </button>
    </>
  );
};

export default RocketsSection;
