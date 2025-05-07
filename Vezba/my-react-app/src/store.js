import { createStore, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"
import { combineReducers } from 'redux';
import charachtersReducer from './reducers/charachtersReducer';
import charachterDetailReducer from './reducers/charachterDetailReducer';
import charachterSearchReducer from './reducers/searchCharachter';

const rootReducer = combineReducers({
   charachters:charachtersReducer,
   charachterDetail: charachterDetailReducer,
   charachterSearch: charachterSearchReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))