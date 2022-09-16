import { configureStore } from '@reduxjs/toolkit';
import cryptosSlice from './Crypto';

const store = configureStore({
  reducer: {
    animes: cryptosSlice,
  },
});

export default store;
