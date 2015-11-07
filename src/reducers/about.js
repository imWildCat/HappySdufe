'use strict';

import { combineReducers } from 'redux';

import * as types from '../constants/action_types' ;

function page(state = {
  isLoading: false,
  html: ''
}, action) {
  switch (action.type) {
    case types.ABOUT_PAGE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.ABOUT_PAGE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        html: action.json.html
      });
    case types.ABOUT_PAGE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
      });
    default:
      return state;
  }
}

export default combineReducers({
  page,
})