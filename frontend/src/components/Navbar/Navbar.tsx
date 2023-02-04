import React, {FC} from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';

type navbarProps = {
    navbarHidden: boolean;
}

const Navbar = ({ navbarHidden }: navbarProps) => {
    return (
        <div className={classNames(styles.navbar, {
            [styles.navbarHide]: navbarHidden
        })}>
            <div className={styles.title}>
                space_fiction
            </div>
            <div className={styles.navs}>
                <div className={styles.nav}>History</div>
                <div className={styles.nav}>Rockets</div>
                <div className={styles.nav}>Planets</div>
                <div className={styles.nav}>Play</div>
            </div>

        </div>
    );
};

export default Navbar;