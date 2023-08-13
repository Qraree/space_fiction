import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ALL_PATHS, ALL_ROCKETS } from '@/constants/rockets';
import { getSectionPosts } from '@/lib/getSectionPosts';
import { LANGUAGES } from '@/constants/common';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppSelector } from '@/redux/hooks';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ALL_PATHS.map((set) => ({
    params: {
      rocket: set[1],
    },
    locale: set[0],
  }));

  return {
    paths,
    fallback: true,
  };
};

// @ts-ignore
export async function getStaticProps({ params, locale }) {
  // const postData = await getRocketsPosts(params.rocket);

  const postData = await getSectionPosts(
    'rockets',
    'en',
    params.rocket,
    locale,
  );
  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

// @ts-ignore
const Rocket = ({ postData }) => {
  return (
    <>
      <PageHeader />
      <Navbar />
      <RocketArticle postData={postData} />
    </>
  );
};

export default Rocket;
