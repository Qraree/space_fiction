import React from 'react';
import styles from './SectionTab.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import { IHomeSections } from '@/types/homeSections';
import {useTranslation} from "next-i18next";

interface SectionTabProps {
  section: IHomeSections;
}

const SectionTab = ({ section }: SectionTabProps) => {
  const {t} = useTranslation('common')
  return (
    <LinkStyled href={section.link} key={section.name}>
      <div className={styles.tabContainer}>
        <div className={styles.tabWrapper}>
          <div className={styles.tab}>
            <img src={section.src} />
            <div className={styles.text}>{t(`${section.name}TabText`)}</div>
          </div>
        </div>
        <h3>{t(`navbarSections.${section.name}`)}</h3>
      </div>
    </LinkStyled>
  );
};

export default SectionTab;
