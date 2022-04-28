import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { imageReducer, buttonReducer as Button } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Image"],
};

const persistImageConfig = {
  key: "imageReducer",
  storage,
  blacklist: ["counter", "isLoading"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    Image: persistReducer(persistImageConfig, imageReducer),
    Button,
  })
);

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
