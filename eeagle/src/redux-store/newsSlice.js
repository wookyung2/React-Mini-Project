import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  clipped : [],
  articles: [],
  keyword : [],
  page: 1
};

export const fetchArticle = createAsyncThunk('news/fetchArticle', ({keyword,page}) => {
  return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=vShxWUp7CoaBCrPHDrROH4wxeGZjOtJ7`)
  .then((res) => res.json())
  .catch((err) => console.log(err))
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers:{
  }, 
  extraReducers:{
    [fetchArticle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      const articles = action.payload.response.docs
      articles.map((article) => {
        state.articles.push(article)
      })
      state.page = state.page + 1
    },
    [fetchArticle.rejected]: (state) => {
      state.isLoading = false;
    },
  }
})




export const { } = newsSlice.actions;
export default newsSlice.reducer;