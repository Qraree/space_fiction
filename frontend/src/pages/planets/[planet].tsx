import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import {GetStaticPaths, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_PATHS} from "@/constants/rockets";
import {getSectionPosts} from "@/lib/getSectionPosts";

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

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = ALL_PATHS.map((set) => ({
        params: {
            planet: set[1],
        },
        locale: set[0],
    }));

    return {
        paths,
        fallback: true,
    };
};

// @ts-ignore
export async function getStaticProps({params, locale}) {

    const postData = await getSectionPosts(
        'planets',
        locale,
        params.planet,
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

export default Planet;
