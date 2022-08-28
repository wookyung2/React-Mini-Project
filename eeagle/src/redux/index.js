import { combineReducers } from "redux";
import clip from "./clip";
import search from "./search";
import axios from "./axios";

const rootReducer = combineReducers({
	// clip,
	search,
	// axios,
});

export default rootReducer;