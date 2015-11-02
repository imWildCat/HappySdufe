'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore(initialState) {
  var createStoreWithMiddleware;
  if (__DEV__) {
    const logger = createLogger({
      level: 'info',
      collapsed: true
      //predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN
    });
    createStoreWithMiddleware= applyMiddleware(
      thunk,
      logger
    )(createStore);
  } else {
    createStoreWithMiddleware= applyMiddleware(
      thunk
    )(createStore);
  }

  return createStoreWithMiddleware(reducer, initialState);
};