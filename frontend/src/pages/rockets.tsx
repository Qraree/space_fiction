import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import RocketsSection from '@/containers/Rockets/RocketsSection';

const Rockets = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <RocketsSection />
        </>
    );
};

export default Rockets;
