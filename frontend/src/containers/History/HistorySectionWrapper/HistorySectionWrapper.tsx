import React, {useState} from 'react';
import styles from './HistorySectionWrapper.module.scss';
import {HISTORY_ARTICLES} from '@/constants/history';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import {useRouter} from 'next/router';
import Sidebar from '@/components/HistorySection/Sidebar/Sidebar';

interface HistorySectionProps {
    children?: React.ReactNode
}

const HistorySectionWrapper = ({ children }: HistorySectionProps) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.sectionNavigationWrapper}>
                <div className={styles.sectionNavigation}>
                    <h4>History Articles</h4>
                    <Sidebar />
                </div>
            </div>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>

    );
};

export default HistorySectionWrapper;
