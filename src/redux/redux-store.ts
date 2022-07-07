import { combineReducers, createStore, applyMiddleware } from "redux";
import mainPageReducer from "./mainPageReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  mainPageReducer: mainPageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export default store;
