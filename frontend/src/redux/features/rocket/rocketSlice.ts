import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RocketsListType, RocketType} from '@/types/rockets';

interface NewRocketType {
    countryName: string,
    title: string,
    img: string,
}

interface NewCountryType {
    countryName: string,
    countryFlag: string,
}

interface rocketState {
    showModal: boolean,
    rocketList: RocketsListType[],
    currentCountryName: string
}

const initialState: rocketState = {
    showModal: false,
    currentCountryName: '',
    rocketList: [
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
        }
    ]
};

export const rocketSlice = createSlice({
    name: 'rocket',
    initialState,
    reducers: {
        showModal: (state: rocketState, action: PayloadAction<string>) => {
            state.showModal = true;
            state.currentCountryName = action.payload;
        },
        hideModal: (state: rocketState) => {
            state.showModal = false;
        },
        addNewRocket: (state: rocketState, action: PayloadAction<NewRocketType>) => {
            const {title, img} = action.payload;
            const rocketCountry = state.rocketList.find(country => country.countryName === action.payload.countryName);
            if (rocketCountry) {
                rocketCountry.rockets.push({title, img});
            }
            state.showModal = false;
        },
        addNewCountry: (state: rocketState, action: PayloadAction<NewCountryType>) => {
            const {countryName, countryFlag} = action.payload;
            state.rocketList.push({countryName, countryFlag, rockets: []});
        },
    }
});

export const { showModal, hideModal, addNewRocket, addNewCountry } = rocketSlice.actions;

export default rocketSlice.reducer;
