import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("search/getList", async ({value,page}) => {
    console.log("page : ",page)
    const response = await axios
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=QZ8zBBGvTq9MZzA36o2w9ktue4Kbi79u`)
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
    // keywords 동록
    history : (state,action) => {
      // 5개 이하이면 바로 push
      if(state.keywords.length < 5) state.keywords.push(action.payload)
      // 5개가 넘으면 첫 번째 값 제거하고 push
      else {
        state.keywords.shift()
        state.keywords.push(action.payload)
      }
    },
    // 똑같은 keywords가 input 되면 기존의 값 삭제해 주고, 새로 push 해주기
    historyUpdate : (state,action) => {
      state.keywords = state.keywords.filter((element) => element !== action.payload)
      state.keywords.push(action.payload)
    }
  },
  extraReducers: {
    [getList.pending]: (state, { payload }) => {
    },
    [getList.fulfilled]: (state, { payload }) => {
        payload.response.docs.map((e) => {
            state.articles.push(e)
        })
    },
    [getList.rejected]: (state, { payload }) => {
    },
  },
});

export default searchReducer
export const {clip,clear,history,historyUpdate} = searchReducer.actions