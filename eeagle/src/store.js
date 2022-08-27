import {configureStore} from '@reduxjs/toolkit'
import newsSlice from './redux-store/newsSlice'
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

const reducer = combineReducers({
  news: newsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});