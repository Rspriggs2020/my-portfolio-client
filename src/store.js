import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export default createStore(reduce, applyMiddleware(thunk))