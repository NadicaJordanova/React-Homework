import { combineReducers, createStore } from "redux";
import guessReducer from "../reducers/guessReducer";

const rootReducer = combineReducers({
  guesser: guessReducer,
});

export const store = createStore(rootReducer);
