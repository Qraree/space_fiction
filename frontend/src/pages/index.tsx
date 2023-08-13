import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import HomeSection from '@/containers/Home/HomeSection';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <PageHeader />
      <HomeSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};
