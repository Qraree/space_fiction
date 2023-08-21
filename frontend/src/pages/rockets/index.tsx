import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import RocketsSection from '@/containers/Rockets/RocketsSection';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import ModalWindow from '@/components/common/ModalWindow/ModalWindow';
import { useAppSelector } from '@/redux/hooks';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/common/Navbar/Navbar'), {
  ssr: false,
});

const Index = () => {
  const { showModal } = useAppSelector((state) => state.rocket);
  return (
    <>
      <PageHeader />
      <Navbar />
      <RocketArticleWrapper>
        <RocketsSection />
      </RocketArticleWrapper>
      {showModal ? <ModalWindow /> : null}
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
