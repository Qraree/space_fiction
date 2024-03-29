import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './features/history/historySlice';
import rocketReducer from './features/rocket/rocketSlice';
import settingsReducer from './features/settings/settingsSlice';
import { rocketAPI } from '@/redux/services/RocketService';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    rocket: rocketReducer,
    settings: settingsReducer,
    [rocketAPI.reducerPath]: rocketAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rocketAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
