import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { imageReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Image"],
};

const persistImageConfig = {
  key: "imageReducer",
  storage,
  blacklist: ["counter"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({ Image: persistReducer(persistImageConfig, imageReducer) })
);

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
