'use strict';

import * as types from '../constants/action_types' ;
import NewsCategoryNames from '../constants/news_categories';

let initialState = {
  slug: 'news'
};

export default function (state = initialState, action = null) {

  switch (action.type) {
    case types.NEWS_LIST_REQUEST:
      return Object.assign({}, {slug: 'bus'});
    case types.NEWS_LIST_SUCCESS:
     console.log(action.json);
      return Object.assign({}, {slug: 'file'});
    case types.NEWS_LIST_FAILURE:
      console.log(action.error);
      return Object.assign({}, {slug: 'map'});
    default:
      return state;
  }
}