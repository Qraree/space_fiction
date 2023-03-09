import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRocketsList, IRocket, IMockRocketsList } from '@/types/rockets';
import { MODAL_MODE, MODAL_MODE_TYPE } from '@/constants/rockets';

interface NewRocketType {
  countryName: string;
  title: string;
  img: string;
}

interface showModalAction {
  rocketCountryId?: number;
  modalMode: 'rocket' | 'country';
}

interface NewCountryType {
  countryName: string;
  countryFlag: string;
}

interface rocketState {
  showModal: boolean;
  rocketList: IMockRocketsList[];
  currentCountryId?: number;
  updateRockets: boolean;
  modalMode: 'rocket' | 'country';
}

const initialState: rocketState = {
  showModal: false,
  currentCountryId: 0,
  updateRockets: false,
  modalMode: MODAL_MODE.ROCKET,
  rocketList: [
    {
      countryName: 'Russia',
      countryFlag: '/img/flags/RussianFlag.png',
      rockets: [
        {
          title: 'Souyz',
          img: '/img/tabPhotos/history_tab_photo.jpg',
        },
        {
          title: 'Saturn',
          img: '/img/tabPhotos/game_tab_photo.jpg',
        },
        {
          title: 'Dnepr',
          img: '/img/tabPhotos/planets_tab_photo.jpg',
        },
        {
          title: 'Vostok',
          img: '/img/tabPhotos/rockets_tab_photo.jpg',
        },
      ],
    },
    {
      countryName: 'USA',
      countryFlag: '/img/flags/AmericanFlag.png',
      rockets: [
        {
          title: 'Saturn',
          img: '/img/tabPhotos/game_tab_photo.jpg',
        },
        {
          title: 'Dnepr',
          img: '/img/tabPhotos/planets_tab_photo.jpg',
        },
        {
          title: 'Vostok',
          img: '/img/tabPhotos/rockets_tab_photo.jpg',
        },
      ],
    },
  ],
};

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    showModal: (state: rocketState, action: PayloadAction<showModalAction>) => {
      state.showModal = true;
      state.modalMode = action.payload.modalMode;
      state.currentCountryId = action.payload.rocketCountryId;
    },
    hideModal: (state: rocketState) => {
      state.showModal = false;
    },
    addNewRocket: (
      state: rocketState,
      action: PayloadAction<NewRocketType>,
    ) => {
      const { title, img } = action.payload;
      const rocketCountry = state.rocketList.find(
        (country) => country.countryName === action.payload.countryName,
      );
      if (rocketCountry) {
        rocketCountry.rockets.push({ title, img });
      }
      state.showModal = false;
    },
    addNewCountry: (
      state: rocketState,
      action: PayloadAction<NewCountryType>,
    ) => {
      const { countryName, countryFlag } = action.payload;
      state.rocketList.push({ countryName, countryFlag, rockets: [] });
    },
    updateRockets: (state: rocketState) => {
      state.updateRockets = !state.updateRockets;
    },
    setModalMode: (
      state: rocketState,
      action: PayloadAction<'rocket' | 'country'>,
    ) => {
      state.modalMode = action.payload;
    },
  },
});

export const {
  showModal,
  hideModal,
  addNewCountry,
  updateRockets,
  setModalMode,
} = rocketSlice.actions;

export default rocketSlice.reducer;
