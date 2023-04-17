import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import walletsReducer from "../slices/walletsSlice";
import assetsReducer from "../slices/assetsSlice";
import conversionsReducer from "../slices/conversionsSlice";
import currenciesReducer from "../slices/currenciesSlice";
import transactionsReducer from "../slices/transactionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wallets: walletsReducer,
    assets: assetsReducer,
    conversions: conversionsReducer,
    currencies: currenciesReducer,
    transactions: transactionsReducer,
  },
});
