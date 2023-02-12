import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import RocketsSection from '@/containers/Rockets/RocketsSection';

const Index = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <RocketsSection />
        </>
    );
};

export default Index;
