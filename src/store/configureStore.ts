import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootState from './reducers/index';

const store = createStore(RootState, applyMiddleware(logger));

export default store;
