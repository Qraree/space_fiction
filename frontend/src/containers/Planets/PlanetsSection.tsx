import React, {Suspense} from 'react';
import styles from './PlanetsSection.module.scss';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/models/planets/Model';
import {Environment, OrbitControls} from '@react-three/drei';

const PlanetsSection = () => {
    return (
        <div className={styles.planetsContainer}>
            <div className={styles.planetWrapper}>
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Model />
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls autoRotate />
                </Canvas>
            </div>
        </div>
    );
};

export default PlanetsSection;