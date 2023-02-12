import React from 'react';
import {useRouter} from 'next/router';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/Navbar/Navbar';

const Rocket = () => {
    const router = useRouter();
    const { rocket } = router.query;
    return (
        <>
            <PageHeader />
            <Navbar />
            {rocket}
        </>
    );
};

export default Rocket;