import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  clippedId : [],
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
    // clipToggle 클릭시, indexOf로 이미 들어가있는 기사인지 확인 진행 후
    // 토글 기능 수행 
    clipToggle: (state, action) => {
      const articles = state.articles
      if(state.clippedId.indexOf(action.payload.id) !== -1){
        const index = state.clippedId.indexOf(action.payload.id);
        state.clippedId.splice(index, 1)
        state.clipped.splice(index, 1)
      }
      else{
      const clippedArticle = articles.filter(article =>
          article._id === action.payload.id)  
      state.clippedId.push(action.payload.id);
      state.clipped.push(...clippedArticle);
      }
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
    // 키워드가 변동되면 articles를 비워주고,
    // clipped Articles로 채워준다.
    // page를 1로 초기화 해준다. 
    cleanUpArticles: (state, action)=> {
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
    // clipped Articles에 이미 클립된 기사라면 push하지 않고
    // 나머지는 다 넣어준다. 
    [fetchArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      const articles = action.payload.response.docs
      articles.map((article) => {
        if(state.clippedId.indexOf(article._id) === -1)
        state.articles.push(article)
      })
      state.page = state.page + 1
      console.log(state.page);
    },
    // fetch 실패시 isLoading만 일단 false로 만들어줌 
    [fetchArticle.rejected]: (state) => {
      state.isLoading = false;
    },
  }
})




export const { clipToggle, keywordUpdate, cleanUpArticles } = newsSlice.actions;
export default newsSlice.reducer;