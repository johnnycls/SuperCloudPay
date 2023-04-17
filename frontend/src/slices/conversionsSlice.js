import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

export const getConversions = createAsyncThunk(
  "api/getConversion",
  async ({}, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "get",
      url: `${BACKEND_URL}/api/conversion/`,
    }).then((response) => response.data);
  }
);

// { fromCurrencyCode: "", toCurrencyCode: "", rate: 0 }
const initialState = {
  conversions: [],
};

export const conversionsSlice = createSlice({
  name: "conversions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversions.fulfilled, (state, action) => {
      state.conversions = action.payload;
    });
  },
});

export default conversionsSlice.reducer;
