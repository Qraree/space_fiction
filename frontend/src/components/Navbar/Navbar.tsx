import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {WEBSITE_SECTIONS} from '@/constants/home';
import Link from 'next/link';

type navbarProps = {
    navbarShowed?: boolean;
    navbarFixed?: boolean;
}

const Navbar = ({ navbarShowed = true, navbarFixed = true }: navbarProps) => {
    return (
        <div className={classNames(styles.navbar, {
            [styles.navbarShow]: navbarShowed,
            [styles.navbarFixed]: navbarFixed,
        })}>
            <div className={styles.title}>
                <Link href="/" className={styles.link}>
                    space_fiction
                </Link>
            </div>
            <div className={styles.navs}>
                {WEBSITE_SECTIONS.map(section => (
                    <Link href={section.link} className={styles.link} key={section.name}>
                        <div className={styles.nav}>
                            {section.name}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Navbar;
