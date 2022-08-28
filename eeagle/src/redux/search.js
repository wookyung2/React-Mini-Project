import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Action types
// const CALL_API = "search/CALL_API";

// Action Creater & Action
export const asyncUpFetch = createAsyncThunk(
    "search/CALL_API", ({text,page}) =>
    async() => {
        return await axios
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&page=1&sort=newest&api-key=QZ8zBBGvTq9MZzA36o2w9ktue4Kbi79u`)
        .then((res)=>res.json())
        .catch((e)=>console.log(e))
    }
)

// Reducer
const searchSlice = createSlice({
    name : searchSlice,
    initialState : {data : []},
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(asyncUpFetch.pending, (state, action)=>{
            state.status = "Loading"
        })
        builder.addCase(asyncUpFetch.fulfilled, (state, action)=>{
            state.data = action.payload
            state.status = "Completed"
        })
        builder.addCase(asyncUpFetch.rejected, (state, action)=>{
            state.status = "Fail"
        })
    }
})

export default searchSlice