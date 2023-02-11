import React from 'react';
import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/3d_models/planets/earth.glb');
    return (
        <>
            <primitive object={gltf.scene} scale={0.01} />
        </>
    );
};

export default Model;