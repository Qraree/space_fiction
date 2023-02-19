import React, { useEffect, useState } from 'react';
import styles from './HomeMenu.module.scss';
import { useRouter } from 'next/router';
import { WEBSITE_SECTIONS } from '@/constants/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';


const HomeMenu = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.historyContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                    <h1>Welcome, wanderer!</h1>
                    <div className={styles.homeMenuText}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lacus et tortor posuere euismod.
                            Suspendisse potenti. Vivamus accumsan magna in neque tempor pretium. Morbi metus libero, ullamcorper et mi quis, dignissim dapibus purus.
                            Nam in euismod erat. Etiam feugiat nunc non rhoncus facilisis. Vestibulum mattis velit quis erat auctor, vitae placerat felis scelerisque.
                            Nam purus lectus, sollicitudin ut justo eu, luctus pellentesque augue. Nullam fringilla pretium semper.
                        </p>
                    </div>
                    <div className={styles.tabsContainer}>
                        {WEBSITE_SECTIONS.map( section => (
                            <LinkStyled href={section.link} key={section.name} >
                                <div className={styles.tabContainer}>
                                    <div className={styles.tabWrapper}>
                                        <div className={styles.tab}>
                                            <img src={section.src} />
                                            <div className={styles.text}>
                                                {section.text}
                                            </div>
                                        </div>
                                    </div>
                                    <h3>{section.name}</h3>
                                </div>
                            </LinkStyled>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;
