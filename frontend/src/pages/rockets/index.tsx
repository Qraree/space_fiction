import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import RocketsSection from '@/containers/Rockets/RocketsSection';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';

const Index = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <RocketArticleWrapper>
                <RocketsSection />
            </RocketArticleWrapper>
        </>
    );
};

export default Index;
