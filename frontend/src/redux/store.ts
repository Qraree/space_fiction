import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './features/history/historySlice';
import rocketReducer from './features/rocket/rocketSlice';

export const store = configureStore({
    reducer: {
        history: historyReducer,
        rocket: rocketReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
