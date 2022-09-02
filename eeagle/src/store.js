import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './redux-store/newsSlice'
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["keywords", "clipes", "articles"]
}



const persistedReducer = persistReducer(persistConfig, searchReducer.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});