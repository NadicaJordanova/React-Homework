import { createStore, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"
import { combineReducers } from 'redux';
import charachtersReducer from './reducers/charachtersReducer';

const rootReducer = combineReducers({
   charachters:charachtersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))