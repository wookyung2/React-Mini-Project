import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  clipped : [],
  articles: [],
  keyword : [],
  page: 1
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers:{
  }, 
})

export const { } = newsSlice.actions;
export default newsSlice.reducer;