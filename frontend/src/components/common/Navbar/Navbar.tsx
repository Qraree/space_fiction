import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { WEBSITE_SECTIONS } from '@/constants/home';
import Link from 'next/link';
import { Select } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeLanguage } from '@/redux/features/settings/settingsSlice';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface navbarProps {
  navbarShowed?: boolean;
  navbarFixed?: boolean;
}

const Navbar = ({ navbarShowed = true, navbarFixed = true }: navbarProps) => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.settings.language);
  const router = useRouter();
  const { t } = useTranslation('common');

  const handleChange = (value: 'ru' | 'en') => {
    dispatch(changeLanguage(value));

    const arrayPath = router.asPath.split('/').slice(1);
    if (arrayPath.length >= 3) {
      const newArrayPath =
        '/' + arrayPath[0] + '/' + value + '/' + arrayPath[2];
      router.push('/', '/', { locale: value });
    } else {
      router.push('/', '/', { locale: value });
    }
  };

  return (
    <div
      className={classNames(styles.navbar, {
        [styles.navbarShow]: navbarShowed,
        [styles.navbarFixed]: navbarFixed,
      })}
    >
      <div className={styles.navbarRightSection}>
        <div className={styles.title}>
          <Link href="/" className={styles.link}>
            space_fiction
          </Link>
        </div>
        <div className={styles.navs}>
          {WEBSITE_SECTIONS.map((section) => (
            <Link
              href={section.link}
              className={styles.link}
              key={section.name}
            >
              <div className={styles.nav}>
                {t(`navbarSections.${section.name}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Select
        className={styles.customSelect}
        onChange={handleChange}
        defaultValue={lang}
        options={[
          { value: 'ru', label: 'ru' },
          { value: 'en', label: 'en' },
        ]}
      />
    </div>
  );
};

export default Navbar;
