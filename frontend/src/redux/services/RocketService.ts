import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRocket, IRocketsList } from '@/types/rockets';

export const rocketAPI = createApi({
  reducerPath: 'rocketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (build) => ({
    fetchAllRocketsCountries: build.query<IRocketsList[], string>({
      query: (name) => `rockets-country${name}`,
    }),
    fetchAllCountryRockets: build.query<IRocket[], number>({
      query: (id) => ({
        url: 'rockets/by-country',
        params: {
          country: id,
        },
      }),
    }),
  }),
});
