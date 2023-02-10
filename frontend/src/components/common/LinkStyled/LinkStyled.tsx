import React from 'react';
import Link from 'next/link';
import styles from './LinkStyled.module.scss';

type LinkStyledProps = {
    href: string,
    children?: string | React.ReactNode,
}
const LinkStyled = ({ href, children }: LinkStyledProps) => {
    return (
        <Link href={href} className={styles.link}>
            {children}
        </Link>
    );
};

export default LinkStyled;