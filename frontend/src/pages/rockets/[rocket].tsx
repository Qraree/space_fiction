import React from 'react';
import {useRouter} from 'next/router';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';

const Rocket = () => {
    const router = useRouter();
    const { rocket } = router.query;
    return (
        <>
            <PageHeader />
            <Navbar />
            <RocketArticleWrapper>
                <RocketArticle />
            </RocketArticleWrapper>
        </>
    );
};

export default Rocket;