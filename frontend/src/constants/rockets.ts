import { LANGUAGES } from '@/constants/common';

export const ROCKETS_BY_COUNTRIES = [
  {
    NAME: 'Russia',
    PHOTO_URL: `${process.env.NEXT_PUBLIC_SERVER_URL}/static-files/Russia`,
    ROCKETS: [
      {
        ROCKET_NAME: '8K-99',
        ROCKET_PHOTO_URL: '',
      },
      {
        ROCKET_NAME: 'Soyuz',
        ROCKET_PHOTO_URL: '',
      },
    ],
  },
  {
    NAME: 'USA',
    PHOTO_URL: '',
    ROCKETS: [
      {
        ROCKET_NAME: 'Saturn',
        ROCKET_PHOTO_URL: '',
      },
      {
        ROCKET_NAME: 'Starship',
        ROCKET_PHOTO_URL: '',
      },
    ],
  },
];

let ROCKETS = [];
for (let country of ROCKETS_BY_COUNTRIES) {
  for (let rocket of country.ROCKETS) {
    ROCKETS.push(rocket.ROCKET_NAME);
  }
}

export const ALL_ROCKETS = ROCKETS;

let PATHS = [];
for (let lang of LANGUAGES) {
  for (let rocket of ALL_ROCKETS) {
    PATHS.push([lang, rocket]);
  }
}

export const ALL_PATHS = PATHS;

export interface MODAL_MODE_TYPE {
  ROCKET: 'rocket';
  COUNTRY: 'country';
}

export const MODAL_MODE: MODAL_MODE_TYPE = {
  ROCKET: 'rocket',
  COUNTRY: 'country',
};
