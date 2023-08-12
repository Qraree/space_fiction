import React, { useEffect, useState } from 'react';
import RocketsList from '@/components/RocketsSection/RocketsList/RocketsList';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IRocketsList } from '@/types/rockets';
import axios from 'axios';
import styles from './RocketsSection.module.scss';
import { showModal } from '@/redux/features/rocket/rocketSlice';
import { MODAL_MODE, ROCKETS_BY_COUNTRIES } from '@/constants/rockets';
import { rocketAPI } from '@/redux/services/RocketService';

const RocketsSection = () => {
  return (
    <>
      <h1>Rockets</h1>
      <hr />
      {ROCKETS_BY_COUNTRIES.map((rocketsSection) => (
        <RocketsList country={rocketsSection} key={rocketsSection.NAME} />
      ))}
    </>
  );
};

export default RocketsSection;
