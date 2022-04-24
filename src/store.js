import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { imageReducer as Image } from "./reducers";

const rootReducer = combineReducers({ Image });

export const store = createStore(rootReducer, applyMiddleware(thunk));
