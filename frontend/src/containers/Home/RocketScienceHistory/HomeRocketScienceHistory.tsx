import React, {FC, useEffect, useState} from 'react';
import styles from './HomeRocketScienceHistory.module.scss';
import Navbar from '@/components/Navbar/Navbar';

const HomeRocketScienceHistory: FC = () => {
    const [navbarHidden, setNavbarHidden] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > innerHeight - 100 || document.documentElement.scrollTop > innerHeight - 100) {
                console.log('showNavbar');
                setNavbarHidden(true);
            } else {
                setNavbarHidden(false);
                console.log('hideNavbar');
            }
        });
    }, []);

    return (
        <div className={styles.historyContainer}>
            <Navbar navbarHidden={navbarHidden} />
            <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                    <h1>Welcome, wanderer!</h1>

                </div>
            </div>
        </div>
    );
};

export default HomeRocketScienceHistory;