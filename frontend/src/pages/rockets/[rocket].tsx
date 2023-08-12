import React from 'react';
import { useRouter } from 'next/router';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import RocketArticle from '@/containers/Rockets/RocketArticle/RocketArticle';
import { GetStaticPaths } from 'next';
import { ALL_ROCKETS } from '@/constants/rockets';
import { getRocketsPosts } from '@/lib/getRocketPosts';
// import {getRocketsPosts} from "@/lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ALL_ROCKETS.map((rocket) => ({
    params: { rocket },
  }));

  return {
    paths,
    fallback: true,
  };
};

// @ts-ignore
export async function getStaticProps({ params }) {
  const postData = await getRocketsPosts(params.rocket);
  if (!postData) {
    return {
      props: {
        message: 'error',
      },
    };
  }

  return {
    props: {
      postData,
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
