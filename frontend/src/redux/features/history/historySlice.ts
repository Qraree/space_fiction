import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface historyState {
  selectedArticle: string;
}

const initialState: historyState = {
  selectedArticle: '',
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setSelectedArticle: (state, action: PayloadAction<string>) => {
      state.selectedArticle = action.payload;
    },
  },
});

export const { setSelectedArticle } = historySlice.actions;

export default historySlice.reducer;
