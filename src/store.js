import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/CombineReducers';

export default createStore(mainReducer, applyMiddleware(thunk))