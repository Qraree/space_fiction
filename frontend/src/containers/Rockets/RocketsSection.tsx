import React from 'react';
import styles from './RocketsSection.module.scss';
import RocketArticleWrapper from '@/containers/Rockets/RocketArticleWrapper/RocketArticleWrapper';
import LinkStyled from '@/components/common/LinkStyled/LinkStyled';
import RocketsList from '@/components/RocketsSection/RocketsList/RocketsList';

const MockRockets = [
    {
        countryName: 'Russia',
        countryFlag: '/img/flags/RussianFlag.png',
        rockets: [
            {
                title: 'Souyz',
                img: '/img/tabPhotos/history_tab_photo.jpg'
            },
            {
                title: 'Saturn',
                img: '/img/tabPhotos/game_tab_photo.jpg'
            },
            {
                title: 'Dnepr',
                img: '/img/tabPhotos/planets_tab_photo.jpg'
            },
            {
                title: 'Vostok',
                img: '/img/tabPhotos/rockets_tab_photo.jpg'
            },
            {
                title: 'Souyz',
                img: '/img/tabPhotos/history_tab_photo.jpg'
            },
            {
                title: 'Saturn',
                img: '/img/tabPhotos/game_tab_photo.jpg'
            },
            {
                title: 'Dnepr',
                img: '/img/tabPhotos/planets_tab_photo.jpg'
            },
            {
                title: 'Vostok',
                img: '/img/tabPhotos/rockets_tab_photo.jpg'
            },
        ]
    },
    {
        countryName: 'USA',
        countryFlag: '/img/flags/AmericanFlag.png',
        rockets: [
            {
                title: 'Saturn',
                img: '/img/tabPhotos/game_tab_photo.jpg'
            },
            {
                title: 'Dnepr',
                img: '/img/tabPhotos/planets_tab_photo.jpg'
            },
            {
                title: 'Vostok',
                img: '/img/tabPhotos/rockets_tab_photo.jpg'
            },
        ]
    },

];

const RocketsSection = () => {

    return (
        <>
            <h1>Rockets</h1>
            <hr />
            {MockRockets.map(rocketsSection => (
                <RocketsList  rocketsSection={rocketsSection} key={rocketsSection.countryName}/>
            ))}
        </>
    );
};

export default RocketsSection;
