import React from 'react';
import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const SecondModel = () => {
    const gltf = useLoader(GLTFLoader, '/3d_models/planets/don.glb');
    return (
        <>
            <primitive object={gltf.scene} scale={25} />
        </>
    );
};

export default SecondModel;