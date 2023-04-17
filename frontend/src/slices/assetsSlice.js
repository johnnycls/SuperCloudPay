import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

// { id: "", wallet: "", currency: "", amount: 0 }
const initialState = {
  assets: [],
};

export const getAssets = createAsyncThunk(
  "api/getAssets",
  async ({}, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "get",
      url: `${BACKEND_URL}/api/asset/`,
    }).then((response) => response.data);
  }
);

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAssets.fulfilled, (state, action) => {
      state.assets = action.payload;
    });
  },
});

export default assetsSlice.reducer;
