import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';
import {GetStaticPaths} from 'next';
import {ALL_PATHS} from '@/constants/rockets';
import {getSectionPosts} from '@/lib/getSectionPosts';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/components/common/Navbar/Navbar'), {ssr: false})

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
export async function getStaticProps({params, locale}) {
    // const postData = await getRocketsPosts(params.rocket);

    const postData = await getSectionPosts(
        'rockets',
        locale,
        params.rocket,
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
const Rocket = ({postData}) => {
    return (
        <>
            <PageHeader/>
            <Navbar/>
            <RocketArticle postData={postData}/>
        </>
    );
};

export default Rocket;
