import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../config";
const axios = require("axios");

const initialState = {
  username: "",
  phone: "",
  firstName: "",
  lastName: "",
  hasLoaded: false,
  hasSignedIn: false,
  token: "",
  wallets: [],
  contacts: [],
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ username, password, phone }) => {
    return axios({
      method: "post",
      url: `${BACKEND_URL}/user/create/`,
      data: {
        username,
        password,
        phone,
        first_name: "firstName",
        last_name: "lastName",
      },
    }).then((response) =>
      axios({
        method: "post",
        url: `${BACKEND_URL}/user/login/`,
        data: { username, password },
      }).then((response) => response.data)
    );
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    return axios({
      method: "post",
      url: `${BACKEND_URL}/user/login/`,
      data: { username, password },
    }).then((response) => response.data);
  }
);

export const retrieveUser = createAsyncThunk(
  "user/retrieveUser",
  async (arg, { getState }) => {
    const state = getState();
    return axios({
      method: "get",
      url: `${BACKEND_URL}/user/retrieve/`,
      headers: {
        Authorization: state.user.token,
      },
      params: {},
    }).then((response) => response.data);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      const { username, phone } = action.meta.arg;
      const { token } = action.payload;
      state.username = username;
      state.phone = phone;
      state.token = `Token ${token}`;
      state.hasLoaded = true;
      state.hasSignedIn = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const { username, phone, first_name, last_name, token } = action.payload;
      state.username = username;
      state.phone = phone;
      state.firstName = first_name;
      state.lastName = last_name;
      state.token = `Token ${token}`;
      state.hasLoaded = true;
      state.hasSignedIn = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.hasLoaded = true;
      state.hasSignedIn = false;
    });

    builder.addCase(retrieveUser.fulfilled, (state, action) => {
      const {
        username,
        phone,
        first_name,
        last_name,
        token,
        wallets,
        contacts,
      } = action.payload;
      state.username = username;
      state.phone = phone;
      state.firstName = first_name;
      state.lastName = last_name;
      state.token = `Token ${token}`;
      state.hasLoaded = true;
      state.hasSignedIn = true;
      state.wallets = wallets;
      state.contacts = contacts;
    });

    builder.addCase(retrieveUser.rejected, (state, action) => {
      state.hasLoaded = true;
      state.hasSignedIn = false;
    });
  },
});

export default userSlice.reducer;
