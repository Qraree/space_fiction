import React from 'react';
import styles from './PlanetsSection.module.scss';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';

const MOCK_PLANETS = [
    {
        title: 'Earth',
        img: '/img/tabPhotos/planets_tab_photo.jpg',
        description: 'fwehowheuweh fwefwefwe wlqpl[p,q'
    },
    {
        title: 'Mars',
        img: '/img/tabPhotos/planets_tab_photo.jpg',
        description: 'fwehowqd ;pl[l[pf wqdiqw jdqw hudwhq hdoiqw'
    },
    {
        title: 'Venus',
        img: '/img/tabPhotos/planets_tab_photo.jpg',
        description: 'qw wqpdokoqpw po wdwq pp'
    },
    {
        title: 'Saturn',
        img: '/img/tabPhotos/planets_tab_photo.jpg',
        description: 'opdkq pwwqjdpqw qw djpq wdo jqw jdqw jdqw jdpq wjdjjj dqwojwoq djqwjd  oj qw po'
    },
    {
        title: 'Jupyter',
        img: '/img/tabPhotos/planets_tab_photo.jpg',
        description: 'fwef ewfwqwd qi jdqow'
    },

];


const PlanetsSection = () => {
    return (
        <>
            <h1>Planets</h1>
            <hr />
            <br />
            {MOCK_PLANETS.map( planet => (
                <LinkStyled href={`/planets/${planet.title}`}  key={planet.title}>
                    <div className={styles.planetContainer}>
                        <div className={styles.planetPhoto}>
                            <img src={planet.img} />
                        </div>
                        <div className={styles.planetInfo}>
                            <h2>{planet.title}</h2>
                            <div className={styles.planetDescription}>
                                <p>
                                    {planet.description}
                                </p>
                            </div>

                        </div>
                    </div>
                </LinkStyled>
            ))}
        </>
    );
};

export default PlanetsSection;
