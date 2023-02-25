import React, { Suspense } from 'react';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Navbar from '@/components/common/Navbar/Navbar';
import GameSection from '@/containers/Game/GameSection';

const Game = () => {
  return (
    <>
      <PageHeader />
      <Navbar />
      <GameSection />
    </>
  );
};

export default Game;
