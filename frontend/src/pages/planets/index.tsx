import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import PlanetsSection from '@/containers/Planets/PlanetsSection';

const Index = () => {
  return (
    <>
      <PageHeader />
      <Navbar />
      <RocketArticleWrapper>
        <PlanetsSection />
      </RocketArticleWrapper>
    </>
  );
};

export default Index;
