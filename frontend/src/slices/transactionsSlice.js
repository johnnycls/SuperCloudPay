import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

// {
//   id: "",
//   datetime: "",
//   amount: 0,
//   transactionType: "",
//   fromWallet: "",
//   toWallet: "",
//   currency: "",
// },
const initialState = {
  transactions: [],
};

export const makeTransaction = createAsyncThunk(
  "transactions/makeTransaction",
  async (
    { fromWallet, toWallet, currency, amount, transactionType },
    { getState }
  ) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "post",
      url: `${BACKEND_URL}/api/transaction/`,
      data: { fromWallet, toWallet, currency, amount, transactionType },
    }).then((response) => response.data);
  }
);

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async ({}, { getState }) => {
    const state = getState();
    return axios({
      headers: {
        Authorization: state.user.token,
      },
      method: "get",
      url: `${BACKEND_URL}/api/transaction/`,
    }).then((response) => response.data);
  }
);

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
    builder.addCase(makeTransaction.fulfilled, (state, action) => {
      state.transactions = [...state.transactions, action.payload];
    });
  },
});

export default transactionsSlice.reducer;
