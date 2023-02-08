import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {WEBSITE_SECTIONS} from '@/constants/home';
import Link from 'next/link';

type navbarProps = {
    navbarShowed?: boolean;
}

const Navbar = ({ navbarShowed = true }: navbarProps) => {
    return (
        <div className={classNames(styles.navbar, {
            [styles.navbarShow]: navbarShowed
        })}>
            <div className={styles.title}>
                <Link href="/" className={styles.link}>
                    space_fiction
                </Link>
            </div>
            <div className={styles.navs}>
                {WEBSITE_SECTIONS.map(section => (
                    <div className={styles.nav} key={section.name}>
                        <Link href={section.link} className={styles.link}>
                            {section.name}
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Navbar;
