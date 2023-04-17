import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

// {address: "", paymentCode: "", category: "P/S/O", assets: [assetIDs]}
const initialState = { wallets: [] };

export const createWallet = createAsyncThunk(
  "wallets/createWallet",
  async ({ category }, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "post",
      url: `${BACKEND_URL}/api/wallet/`,
      data: { category },
    }).then((response) => response.data);
  }
);

export const getWallets = createAsyncThunk(
  "wallets/getWallets",
  async ({}, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "get",
      url: `${BACKEND_URL}/api/wallet/`,
    }).then((response) => response.data);
  }
);

export const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createWallet.fulfilled, (state, action) => {
      state.wallets = [...state.wallets, action.payload];
    });
    builder.addCase(getWallets.fulfilled, (state, action) => {
      state.wallets = action.payload;
    });
  },
});

export default walletsSlice.reducer;
