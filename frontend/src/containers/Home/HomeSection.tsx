import 'swiper/css';
import React from 'react';
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeMenu from '@/containers/Home/Menu/HomeMenu';
import HomeStarSky from '@/containers/Home/StarSky/HomeStarSky';
import styles from './HomeSection.module.scss';

const HomeSection = () => {
    return (

        <Swiper
            direction="vertical"
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}
            mousewheel={{
                invert: false
            }}
            speed={800}
        >
            <SwiperSlide>
                <HomeStarSky />
            </SwiperSlide>
            <SwiperSlide>
                <HomeMenu />
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSection;
