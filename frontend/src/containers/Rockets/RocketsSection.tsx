import React, { useEffect, useState } from 'react';
import RocketsList from '@/components/RocketsSection/RocketsList/RocketsList';
import { useAppSelector } from '@/redux/hooks';
import { IRocketsList } from '@/types/rockets';
import axios from 'axios';

const RocketsSection = () => {
  const { rocketList } = useAppSelector((state) => state.rocket);
  const [list, setList] = useState<IRocketsList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/rockets-country');
      const data = response.data;
      setList(data);
      console.log('hello');
    })();
  }, []);

  return (
    <>
      <h1>Rockets</h1>
      <hr />
      {list.map((rocketsSection) => (
        <RocketsList
          rocketsSection={rocketsSection}
          key={rocketsSection.name}
        />
      ))}
    </>
  );
};

export default RocketsSection;
