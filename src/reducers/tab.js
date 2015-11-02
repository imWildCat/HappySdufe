'use strict';

let types = require('../constants/action_types');

let initialState = 'news';

export default function (state = initialState, action = null) {

  switch (action.type) {
    case types.TAB_BUS:
      state = 'bus';
      break;
    case types.TAB_FILE:
      state = 'file';
      break;
    case types.TAB_MAP:
      state = 'map';
      break;
    case types.NEWS:
      state = 'news';
      break;
    case types.TAB_SETTING:
      state = 'setting';
      break;
    default:
      return initialState;
  }

  return state;
}