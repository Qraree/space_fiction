import React, { Suspense, useEffect, useState } from 'react';
import styles from './RocketArticle.module.scss';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/models/planets/Model';
import { Environment, OrbitControls } from '@react-three/drei';
import { getRandomId } from '@/helpers/random';

interface RocketArticleProps {
  postData: any;
}

const RocketArticle = ({ postData }: RocketArticleProps) => {
  if (!postData) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.rocketCanvasWrapper}>
        <section className={styles.rocketCanvas}>
          <Canvas>
            <Suspense fallback={null}>
              <Model />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>
        </section>
      </div>
      <div className={styles.wrapper}>
        <h1>{postData.title}</h1>
        <hr />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <div className={styles.rocketInfoWrapper}>
        <div className={styles.rocketInfo}>
          <table className={styles.table}>
            <tbody>
              {postData.tech.map((section: any) => (
                <>
                  <tr className={styles.row} key={section.name}>
                    <td colSpan={2} className={styles.titleCell}>
                      <h4 className={styles.tableRowTitle}>{section.name}</h4>
                    </td>
                  </tr>
                  {section.value.map((row: any) => (
                    <tr className={styles.tableRow} key={getRandomId()}>
                      <td>{Object.keys(row)}</td>
                      {/* @ts-ignore */}
                      <td>{Object.values(row)}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RocketArticle;
