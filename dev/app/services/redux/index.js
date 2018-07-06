import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers';

export default createStore(
  RootReducer,
  undefined,
  compose(applyMiddleware(ReduxThunk, logger))
)