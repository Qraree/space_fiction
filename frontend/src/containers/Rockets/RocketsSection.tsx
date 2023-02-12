import React from 'react';
import styles from './RocketsSection.module.scss';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';

const RocketsSection = () => {
    return (
        <RocketArticleWrapper>
            <h1>Rockets</h1>
            <hr />
            {[1, 2, 3, 4, 5].map(rocketsSection => (
                <div className={styles.rocketsByCountry} key={rocketsSection}>
                    <h3>Russia</h3>
                    <div className={styles.rockets}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rocket => (
                            <div className={styles.rocket} key={rocket}>
                                <img src="/img/tabPhotos/history_tab_photo.jpg"/>
                                <div className={styles.name}>
                                    <p>
                                        Soyuz
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </RocketArticleWrapper>
    );
};

export default RocketsSection;