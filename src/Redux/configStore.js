import { configureStore } from '@reduxjs/toolkit';
import animesSlice from './animes';

const store = configureStore({
  reducer: {
    animes: animesSlice,
  },
});

export default store;
