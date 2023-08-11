import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    'http://localhost:5000/static-files/rocket.glb',
  );
  return (
    <>
      <primitive object={gltf.scene} scale={0.3} />
    </>
  );
};

export default Model;
