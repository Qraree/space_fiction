import React from 'react';
import styles from './SectionTab.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import {IHomeSections} from '@/types/homeSections';

interface SectionTabProps {
    section: IHomeSections
}

const SectionTab = ({ section }: SectionTabProps) => {
    return (
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
    );
};

export default SectionTab;
