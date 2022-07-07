import mainPageReducer from "./mainPageReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

let reducers = combineReducers({
  mainPageReducer: mainPageReducer,
});

const store = configureStore({
  reducer: reducers,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
