'use strict';

let types = require('../constants/action_types');

let initialState = {
  slug: 'news'
};

export default function (state = initialState, action = null) {

  switch (action.type) {
    case types.TAB_BUS:
      return Object.assign({}, { slug: 'bus'});
    case types.TAB_FILE:
      return Object.assign({}, { slug: 'file'});
    case types.TAB_MAP:
      return Object.assign({}, { slug: 'map'});
    case types.TAB_NEWS:
      return Object.assign({}, { slug: 'news'});
    case types.TAB_SETTING:
      return Object.assign({}, { slug: 'setting'});
    default:
      return state;
  }
}