import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import HistorySectionWrapper from '@/containers/History/HistorySectionWrapper/HistorySectionWrapper';
import HistoryFutureRocketScience from '@/containers/History/HistoryFutureRocketScience';

const FutureOfRocketScience = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <HistorySectionWrapper>
                <HistoryFutureRocketScience />
            </HistorySectionWrapper>
        </>
    );
};

export default FutureOfRocketScience;