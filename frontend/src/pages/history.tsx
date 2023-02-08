import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import HistorySection from '@/containers/History/HistorySection';
import HistoryQuiz from '@/components/common/HistoryQuiz/HistoryQuiz';


const History = () => {
    return (
        <>
            <PageHeader />
            <Navbar />
            <HistorySection />
        </>
    );
};

export default History;
