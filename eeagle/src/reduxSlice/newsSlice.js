import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("search/getList", async ({value,page}) => {
    const response = await axios
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`)
    return response.data;
});

const searchReducer = createSlice({
  name: "searchArticle",
  initialState: {
    isLoading: false,
    clipes : [],
    articles: [],
    keywords : [],
  },
  reducers: {
    // clip 설정해주기
    clip : (state,action) => {
      // clipes에 새로 clip한 기사의 _id와 동등한 _id 값이 있으면
      if(state.clipes.some(clip => clip._id === action.payload._id)){
        // 제거해 주기
        state.clipes = state.clipes.filter(( clip ) => clip._id !== action.payload._id );
      }
      else {
        // 없으면 추가
        state.clipes.push(action.payload)
      }
    },
    // keyword가 바뀌면 기존 article 초기화해주기
    clear : (state) => {
      state.articles =[]
    },
    // 똑같은 keywords가 input 되면 기존의 값 삭제해 주고, 새로 push 해주기
    historyUpdate : (state,action) => {
      state.keywords = state.keywords.filter((element) => element !== action.payload)
      if(state.keywords.length >= 5) state.keywords.shift();
      state.keywords.push(action.payload)
    }
  },
  extraReducers: {
    [getList.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getList.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      payload.response.docs.map((e) => {
          state.articles.push(e)
      })
    },
    [getList.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
});

export default searchReducer
export const {clip,clear,history,historyUpdate} = searchReducer.actions