import React, { useEffect, useState} from 'react';
import Navbar from '@/components/Navbar/Navbar';
import {Tab, Tabs} from '@mui/material';
import TabPanel from '@/components/TabPanel/TabPanel';
import styles from './HomeMenu.module.scss';
import {ButtonUnstyled} from '@mui/base';
import {useRouter} from 'next/router';
import {WEBSITE_SECTIONS} from '@/constants/home';

const HomeMenu = () => {
    const [navbarShowed, setNavbarShowed] = useState(false);
    const [value, setValue] = useState(0);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > innerHeight - 100 || document.documentElement.scrollTop > innerHeight - 100) {
                setNavbarShowed(true);
            } else {
                setNavbarShowed(false);
            }
        });
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.historyContainer}>
            <Navbar navbarShowed={navbarShowed} navbarFixed={false}/>
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
                            {WEBSITE_SECTIONS.map( (tabPanel, index) => (
                                <Tab label={WEBSITE_SECTIONS[index].name} key={WEBSITE_SECTIONS[index].name}/>
                            ))}
                        </Tabs>
                        {WEBSITE_SECTIONS.map( (tabPanel, index) => (
                            <TabPanel value={value} index={index} key={WEBSITE_SECTIONS[index].name}>
                                <div className={styles.tabContent}>
                                    <img
                                        src={WEBSITE_SECTIONS[index].src}
                                        alt={WEBSITE_SECTIONS[index].alt}
                                    />
                                    <div className={styles.tabContentText}>
                                        {WEBSITE_SECTIONS[index].text}
                                    </div>
                                    <ButtonUnstyled className={styles.tabContentButton} onClick={() => router.push(WEBSITE_SECTIONS[index].link)}>
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
