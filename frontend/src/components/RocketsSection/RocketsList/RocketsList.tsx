import React, {useState} from 'react';
import styles from './RocketsList.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import {RocketsListType} from '@/types/rockets';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface RocketsListProps {
    rocketsSection: RocketsListType
}

const RocketsList = ({rocketsSection}: RocketsListProps) => {
    const [hideList, setHideList] = useState<boolean>(false);

    function handleList() {
        setHideList(!hideList);
    }

    return (
        <div className={styles.rocketsByCountry} key={rocketsSection.countryName}>
            <div className={styles.countryHeader}>
                <div className={styles.flagName}>
                    <h3>{rocketsSection.countryName}</h3>
                    <div className={styles.flag}>
                        <img src={rocketsSection.countryFlag} />
                    </div>
                </div>
                <button onClick={handleList}>
                    {hideList ? <BsChevronDown /> : <BsChevronUp />}
                </button>
            </div>
            <div className={classNames(styles.rockets, {
                [styles.rocketsHide]: hideList
            })}>
                {rocketsSection.rockets.map(rocket => (
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
                ))}
                <div className={classNames(styles.rocket, styles.addRocket)}>
                    <p>
                        New rocket
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RocketsList;
