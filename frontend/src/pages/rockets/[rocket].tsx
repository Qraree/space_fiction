import React from 'react';
import { useRouter } from 'next/router';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';

const Rocket = () => {
  const router = useRouter();
  const { rocket } = router.query;
  return (
    <>
      <PageHeader />
      <Navbar />
      <RocketArticle />
    </>
  );
};

export default Rocket;
