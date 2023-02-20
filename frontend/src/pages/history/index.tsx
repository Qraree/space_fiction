import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import HistorySectionWrapper from '@/containers/History/HistorySectionWrapper/HistorySectionWrapper';
import HistoryHome from '@/containers/History/HistoryHome';


const Index = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <HistorySectionWrapper>
                <HistoryHome />
            </HistorySectionWrapper>
        </>
    );
};

export default Index;
