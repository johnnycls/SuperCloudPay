import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

export const getCurrencies = createAsyncThunk(
  "api/getCurrencies",
  async ({}, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "get",
      url: `${BACKEND_URL}/api/currency/`,
    }).then((response) => response.data);
  }
);

// { code: "", name: "" }
const initialState = {
  currencies: [],
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  },
});

export default currenciesSlice.reducer;
