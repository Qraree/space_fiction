import React from 'react';
import styles from './Rocket.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import {RocketType} from '@/types/rockets';

interface RocketProps {
    rocket: RocketType
}

const Rocket = ({ rocket }: RocketProps) => {
    return (
        <LinkStyled href={`/rockets/${rocket.title}`} key={rocket.title}>
            <div className={styles.rocket}>
                <img src={rocket.img}/>
                <div className={styles.name}>
                    <p>
                        {rocket.title}
                    </p>
                </div>
            </div>
        </LinkStyled>
    );
};

export default Rocket;
