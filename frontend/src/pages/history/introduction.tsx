import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import HistorySectionWrapper from '@/containers/History/HistorySectionWrapper/HistorySectionWrapper';
import HistoryIntroduction from '@/containers/History/HistoryIntroduction';

const Introduction = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <HistorySectionWrapper>
                <HistoryIntroduction />
            </HistorySectionWrapper>
        </>
    );
};

export default Introduction;
