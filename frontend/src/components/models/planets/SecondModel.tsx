import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function SecondModel(props: any) {
    // @ts-ignore
    const { nodes, materials } = useGLTF('/3d_models/planets/don.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus.geometry}
                material={materials['Материал.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icing.geometry}
                material={materials.Материал}
            />
        </group>
    );
}

useGLTF.preload('/don.glb');
