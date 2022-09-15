import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';

export const getAnimes = createAsyncThunk('getting Api from animes', async () => {
  const gottenAnimes = await axios.get(URL).catch((error) => error.delete);
  const animesData = gottenAnimes.data;
  return animesData.data;
});

export const searchAnimes = createAsyncThunk('search the animes', async (name) => {
  const exploreAnimes = await axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`).catch((error) => error);
  return exploreAnimes.data;
});

const animesSlice = createSlice({
  name: 'animes',
  initialState,
  extraReducers: {
    [getAnimes.fulfilled]: (state, action) => action.payload,
    [searchAnimes.fulfilled]: (state, action) => action.payload,
  },
});

export default animesSlice.reducer;
