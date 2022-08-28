import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./App";
// import logger from "redux-logger"
// import rootReducer from "./redux";
// import axiosMiddleware from 'redux-axios-middleware';
// import ThunkMiddleware  from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./redux/search";

const store = configureStore({
  rootReducer : { 
    search : searchSlice.reducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);