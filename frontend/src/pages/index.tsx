import React from 'react';
import HomeStarSky from '@/containers/Home/StarSky/HomeStarSky';
import HomeMenu from '@/containers/Home/Menu/HomeMenu';
import PageHeader from '@/components/common/PageHeader/PageHeader';

export default function Home() {

    return (
        <>
            <PageHeader />
            <HomeStarSky />
            <HomeMenu />
        </>
    );
}
