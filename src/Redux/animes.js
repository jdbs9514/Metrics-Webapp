import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const getAnimes = createAsyncThunk('getting Api from animes', async () => {
  const gottenAnimes = await axios.get('https://animechan.vercel.app/api/quotes').catch((error) => error);
  const animesData = gottenAnimes.data;
  return animesData;
});

export const searchAnimes = createAsyncThunk('search the animes', async (title) => {
  const exploreAnimes = await axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${title}`).catch((error) => error);
  return exploreAnimes.data;
});

const animesSlice = createSlice({
  title: 'anime',
  initialState,
  extraReducers: {
    [getAnimes.fulfilled]: (state, action) => action.payload,
    [searchAnimes.fulfilled]: (state, action) => action.payload,
  },
});

export default animesSlice.reducer;