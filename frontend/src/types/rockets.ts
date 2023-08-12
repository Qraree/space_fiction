export interface IRocketListItem {
  NAME: string;
  PHOTO_URL: string;
  ROCKETS: IRocketsListNew[];
}

export interface IRocketsListNew {
  ROCKET_NAME: string;
  ROCKET_PHOTO_URL: string;
}

export interface IRocketsList {
  id: number;
  name: string;
  flag: string;
}

export interface IRocket {
  id: number;
  name: string;
  img: string;
  rocketCountryId: number;
}

export interface IMockRocketsList {
  countryName: string;
  countryFlag: string;
  rockets: IMockRocket[];
}

export interface IMockRocket {
  title: string;
  img: string;
}
