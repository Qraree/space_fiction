import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import HistorySectionWrapper from '@/containers/History/HistorySectionWrapper/HistorySectionWrapper';
import HistoryHome from '@/containers/History/HistoryHome';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '@/components/common/Navbar/Navbar';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default Index;
