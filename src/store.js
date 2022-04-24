import { createStore, combineReducers } from "redux";
import { imageReducer as Image } from "./reducers";

export const store = createStore(combineReducers({ Image }));
