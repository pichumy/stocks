import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default (preLoadedState = {}) =>
  createStore(rootReducer, preLoadedState,
    applyMiddleware(thunk)
);
