import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  clipped : [],
  articles: [],
  keyword : [],
  page: 1
};



// 검색한 키워드와 페이지 payload 객체로 받아서, fetch를 돌리는 비동기 액션
export const fetchArticle = createAsyncThunk('news/fetchArticle', ({keyword,page}) => {
  return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=vShxWUp7CoaBCrPHDrROH4wxeGZjOtJ7`)
  .then((res) => res.json())
  .catch((err) => console.log(err))
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers:{
    // 기사 옆 clip버튼 누르면 해당 기사를 클립하는 기능임 
    // articles에서 id를 비교해서, clipped에 푸시
    clipToggle: (state, action) => {
      const articles = state.articles
      const clippedArticle = articles.filter(article =>
          article._id === action.payload.id
      )  
      state.clipped.push(...clippedArticle);
    },

    // fetch하게되는 키워드를 키워드를 푸시하는데 그전에
    // 중복 및 배열 길이 검사를 통해 1차적으로 검사
    keywordUpdate: (state, action)=> {
      const newKeywords = state.keyword.filter(keyword => 
        keyword !== action.payload.keyword
      )
      if(newKeywords.length === 5) newKeywords.shift();
      newKeywords.push(action.payload.keyword);
      state.keyword = newKeywords;
    },

    // 키워드가 변동되면 articles를 비워줘야함
    cleanUpArticles: (state)=> {
      state.articles = [];
      state.page = 1;
    },
  }, 
  extraReducers:{
    // fetch 진행중일때 isLoading을 true로 만들어서 다른 fetch는 안받게끔
    [fetchArticle.pending]: (state, action) => {
      state.isLoading = true;
    },
    // fetch가 성공적으로 진행되면 isLoading을 false로 해주고,
    // 받아온 기사들은 articles에 푸시해서 다 넣어줌 
    [fetchArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      const articles = action.payload.response.docs
      articles.map((article) => {
        state.articles.push(article)
      })
      state.page = state.page + 1
    },
    // fetch 실패시 isLoading만 일단 false로 만들어줌 
    [fetchArticle.rejected]: (state) => {
      state.isLoading = false;
    },
  }
})




export const { clipToggle, keywordUpdate, cleanUpArticles } = newsSlice.actions;
export default newsSlice.reducer;