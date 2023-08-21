import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getLang} from "@/lib/changeLanguageStorage";

interface IInitialState {
  language: string
}

export const initialState: IInitialState = {
  language: getLang()
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
