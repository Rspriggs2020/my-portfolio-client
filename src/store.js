import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/CombineReducers';
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))
//export default createStore(mainReducer, applyMiddleware(thunk))
