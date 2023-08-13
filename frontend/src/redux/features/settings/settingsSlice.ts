import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  language: 'ru' | 'en';
}

export const initialState: IInitialState = {
  language: 'ru',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<'en' | 'ru'>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
