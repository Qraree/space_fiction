import React, { useEffect, useState} from 'react';
import Navbar from '@/components/Navbar/Navbar';
import {Tab, Tabs} from '@mui/material';
import TabPanel from '@/components/TabPanel/TabPanel';
import styles from './HomeMenu.module.scss';
import {ButtonUnstyled} from '@mui/base';
import {useRouter} from 'next/router';

const TAB_IMAGES = [
    {   name: 'History',
        src: '/img/tabPhotos/history_tab_photo.jpg',
        alt: 'history photo',
        text: 'Learn more about history of rocket science!',
        link: '/history',
    },
    {   name: 'Rockets',
        src: '/img/tabPhotos/rockets_tab_photo.jpg',
        alt: 'rockets photo',
        text: 'Learn more about rocket ships!',
        link: '/rockets',
    },
    {   name: 'Planets',
        src: '/img/tabPhotos/planets_tab_photo.jpg',
        alt: 'planets photo',
        text: 'Learn more about planets in our solar system!',
        link: '/planets',
    },
    {   name: 'Game',
        src: '/img/tabPhotos/game_tab_photo.jpg',
        alt: 'game photo',
        text: 'Try yourself in this mini-game about rockets and planets!',
        link: '/game',
    },

];

const HomeMenu = () => {
    const [navbarHidden, setNavbarHidden] = useState(false);
    const [value, setValue] = useState(0);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > innerHeight - 100 || document.documentElement.scrollTop > innerHeight - 100) {
                setNavbarHidden(true);
            } else {
                setNavbarHidden(false);
            }
        });
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.historyContainer}>
            <Navbar navbarHidden={navbarHidden} />
            <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                    <h1>Welcome, wanderer!</h1>
                    <div className={styles.tabsContainer}>
                        <Tabs
                            orientation="vertical"
                            value={value}
                            onChange={handleChange}
                            //@ts-ignore
                            textColor="white"
                        >
                            {TAB_IMAGES.map( (tabPanel, index) => (
                                <Tab label={TAB_IMAGES[index].name} key={TAB_IMAGES[index].name}/>
                            ))}
                        </Tabs>
                        {TAB_IMAGES.map( (tabPanel, index) => (
                            <TabPanel value={value} index={index} key={TAB_IMAGES[index].name}>
                                <div className={styles.tabContent}>
                                    <img
                                        src={TAB_IMAGES[index].src}
                                        alt={TAB_IMAGES[index].alt}
                                    />
                                    <div className={styles.tabContentText}>
                                        {TAB_IMAGES[index].text}
                                    </div>
                                    <ButtonUnstyled className={styles.tabContentButton} onClick={() => router.push(TAB_IMAGES[index].link)}>
                                        Go to page
                                    </ButtonUnstyled>
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;
