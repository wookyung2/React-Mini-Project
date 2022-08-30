//store/index.js
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import searchReducer from "./redux/search";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist"
import {combineReducers} from 'redux'

const persistConfig = {
  key: "root",
  version: "1.0",
  storage,
  whiteList: ['news']
}
const reducer = combineReducers({ searchReducer: searchReducer.reducer });
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});