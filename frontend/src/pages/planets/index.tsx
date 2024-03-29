import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import PlanetsSection from '@/containers/Planets/PlanetsSection';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};

export default Index;
