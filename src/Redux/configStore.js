import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './animes';

const store = configureStore({
    reducer: {
        animes: animeReducer,
    },
});

export default store;