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
