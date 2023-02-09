import React from 'react';
import styles from './HistorySectionWrapper.module.scss';
import {HISTORY_ARTICLES} from '@/constants/history';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';

type HistorySectionProps = {
    children?: React.ReactNode
}

const HistorySectionWrapper = ({ children }: HistorySectionProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionNavigation}>
                <h4>History Articles</h4>
                {HISTORY_ARTICLES.map( article => (
                    <LinkStyled href={article.link} key={article.id}>
                        <div className={styles.articleNav}>
                            {article.title}
                        </div>
                    </LinkStyled>
                ))}
            </div>
            <div className={styles.wrapper}>
                {children}
            </div>
            <div className={styles.articleNavigation}>
                <div className={styles.articleNavigationFix}>
                </div>
            </div>
        </div>

    );
};

export default HistorySectionWrapper;
