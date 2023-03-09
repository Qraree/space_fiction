import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/models/planets/Model';
import { Environment, OrbitControls } from '@react-three/drei';
import styles from './GameSection.module.scss';

const GameSection = () => {
  return <div className={styles.container}></div>;
};

export default GameSection;
