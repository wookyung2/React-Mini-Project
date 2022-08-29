//store/index.js
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import searchReducer from "./redux/search";
import logger from "redux-logger";
  
const reducer = combineReducers({ searchReducer: searchReducer.reducer });
  
export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});