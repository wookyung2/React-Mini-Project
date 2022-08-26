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
    clipToggle: (state, action) => {
      const articles = state.articles
      const clippedArticle = articles.filter(article =>
          article._id === action.payload.id
      )  
      state.clipped.push(...clippedArticle);
    },
    keywordUpdate: (state, action)=> {
      const newKeywords = state.keyword.filter(keyword => 
        keyword !== action.payload.keyword
      )
      if(newKeywords.length === 5) newKeywords.shift();
      newKeywords.push(action.payload.keyword);
      state.keyword = newKeywords;
    },
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




export const { clipToggle, keywordUpdate } = newsSlice.actions;
export default newsSlice.reducer;