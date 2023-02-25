import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const rocketAPI = createApi({
  reducerPath: 'rocketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    fetchAllRockets: build.query({
      query: (name) => '',
    }),
  }),
});
