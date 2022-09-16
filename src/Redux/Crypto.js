import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const URL = 'https://api.coincap.io/v2/assets';

export const getCryptos = createAsyncThunk('getting Api from cryptos', async () => {
  const gottenCryptos = await axios.get(URL).catch((error) => error);
  const cryptoData = gottenCryptos.data;
  return cryptoData.data;
});

export const searchCryptos = createAsyncThunk('search the cryptos', async (id) => {
  const exploreCryptos = await axios.get(`https://api.coincap.io/v2/assets/${id}`).catch((error) => error);
  return exploreCryptos.data;
});

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  extraReducers: {
    [getCryptos.fulfilled]: (state, action) => action.payload,
    [searchCryptos.fulfilled]: (state, action) => action.payload,
  },
});

export default cryptosSlice.reducer;
