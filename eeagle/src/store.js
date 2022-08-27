import {configureStore} from '@reduxjs/toolkit'
import newsSlice from './redux-store/newsSlice'

export const store = configureStore({
  reducer:{
    news: newsSlice,
  },
});