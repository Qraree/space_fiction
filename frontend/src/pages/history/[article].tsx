import React from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import HistorySectionWrapper from '@/containers/History/HistorySectionWrapper/HistorySectionWrapper';
import HistoryIntroduction from '@/containers/History/HistoryIntroduction';
import { GetStaticPaths } from 'next';
import { getSectionPosts } from '@/lib/getSectionPosts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HISTORY_PATHS } from '@/constants/history';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/common/Navbar/Navbar'), {
  ssr: false,
});

// @ts-ignore
const Article = ({ postData }) => {
  return (
    <>
      <PageHeader />
      <Navbar />
      <HistorySectionWrapper>
        <div>
          <h1>{postData.title}</h1>
          <hr />
          <div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </HistorySectionWrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = HISTORY_PATHS.map((set) => ({
    params: {
      article: set[1],
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
  const postData = await getSectionPosts('history', locale, params.article);
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

export default Article;
