import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';

const Planet = () => {
  return (
    <>
      <PageHeader />
      <Navbar />
      <RocketArticleWrapper>
        <h1>Hello</h1>
      </RocketArticleWrapper>
    </>
  );
};

export default Planet;
