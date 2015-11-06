'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import APIRequestMiddleware from '../middlewares/api_request_middleware';
import APIClient from '../utils/api_client';
import reducer from '../reducers';
import {checkAndGetToken} from '../utils/device_token';

checkAndGetToken();

export default function configureStore(initialState) {
  let apiRequestMiddleware = APIRequestMiddleware(new APIClient());
  var createStoreWithMiddleware;
  if (__DEV__) {
    const logger = createLogger({
      level: 'info',
      collapsed: true
      //predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN
    });
    createStoreWithMiddleware= applyMiddleware(
      thunk,
      apiRequestMiddleware,
      logger
    )(createStore);
  } else {
    createStoreWithMiddleware= applyMiddleware(
      thunk,
      apiRequestMiddleware
    )(createStore);
  }

  return createStoreWithMiddleware(reducer, initialState);
};