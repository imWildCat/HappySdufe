'use strict';

import * as types from '../constants/action_types' ;
import NewsCategoryNames from '../constants/news_category_names';

let initialState = {
  currentCategoryID: 1
};

NewsCategoryNames.forEach((name) => {
  initialState[name] = {
    page: 0,
    hasNewPage: true,
    pages: []
  };
});

export default function (state = initialState, action = null) {

  switch (action.type) {
    case types.CHANGE_NEWS_CATEGORY:
      return Object.assign({} , state, { currentCategoryID: action.categoryID });
    case types.NEWS_LIST_REQUEST:
      return state;
    case types.NEWS_LIST_SUCCESS:
      //console.log(action.json);
      let newState = Object.assign({}, state);
      let json = action.json;
      newState[action.json.category_name].page = json.page;
      newState[action.json.category_name].hasNewsPage = json.has_new_page;
      newState[action.json.category_name].pages[json.page - 1] = json.news_list;
      //console.log(newState);
      return newState;
    case types.NEWS_LIST_FAILURE:
      console.log(action.error);
      return state;
    default:
      return state;
  }
}