import React from 'react';
import {HISTORY_ARTICLES} from '@/constants/history';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import {useRouter} from 'next/router';
import styles from './SideBar.module.scss';

const Sidebar = () => {
    const router = useRouter();

    return (
        <>
            {HISTORY_ARTICLES.map( article => (
                <LinkStyled href={article.link} key={article.id}>
                    <div
                        className={styles.articleNav}
                        style={{
                            background: article.link === router.asPath
                                ? 'white'
                                : 'transparent',
                            color: article.link === router.asPath
                                ? 'black'
                                : 'white',
                        }}
                    >
                        {article.title}
                    </div>
                </LinkStyled>
            ))}
        </>
    );
};

export default Sidebar;