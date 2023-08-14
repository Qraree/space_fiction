import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef } from 'react';
import useDeviceSize from '@/hooks/useDeviceSize';
import { ButtonUnstyled } from '@mui/base';

import styles from './HomeStarSky.module.scss';
import CanvasStar from '../../../helpers/CanvasStar';
import RocketShip from '@/helpers/RocketShip';
import { useSwiper } from 'swiper/react';
import {useTranslation} from "next-i18next";

const HomeStarSky: FC = () => {
  const [widthState, heightState] = useDeviceSize();
  const canvasRef = useRef(null);
  const router = useRouter();
  const swiper = useSwiper();
  const {t} = useTranslation('common')

  useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    const circleArray: any = [];

    for (let i = 0; i < 2000; i++) {
      // @ts-ignore
      circleArray.push(new CanvasStar(ctx));
    }

    // @ts-ignore
    circleArray.push(new RocketShip(ctx));

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };

    animate();
  }, []);

  const handleClick = () => {
    swiper.slideNext();
  };

  return (
    <div className={styles.starSkyContainer}>
      <canvas ref={canvasRef} />
      <div className={styles.wrapper}>
        <div className={styles.quoteWrapper}>
          <div className={styles.quote}>
            <h1>
              {t('quote')}
            </h1>
            <p>{t('quoteAuthor')}</p>
          </div>
          <ButtonUnstyled className={styles.button} onClick={handleClick}>
            {t('start')}
          </ButtonUnstyled>
        </div>
      </div>
    </div>
  );
};

export default HomeStarSky;
