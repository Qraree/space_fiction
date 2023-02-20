import React from 'react';
import RocketsList from '@/components/RocketsSection/RocketsList/RocketsList';
import {useAppSelector} from '@/redux/hooks';
import ModalWindow from '@/components/common/ModalWindow/ModalWindow';

const RocketsSection = () => {
    const { rocketList } = useAppSelector(state => state.rocket);

    return (
        <>
            <h1>Rockets</h1>
            <hr />
            {rocketList.map(rocketsSection => (
                <RocketsList  rocketsSection={rocketsSection} key={rocketsSection.countryName}/>
            ))}
        </>
    );
};

export default RocketsSection;
