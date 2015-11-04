'use strict';

import { combineReducers } from 'redux';
import * as types from '../constants/action_types' ;
import NewsCategoryNames from '../constants/news_category_names';

let initialListState = {
  currentCategoryID: 1
};

NewsCategoryNames.forEach((name) => {
  initialListState[name] = {
    page: 0,
    hasNewPage: true,
    pages: [],
  };
});

function singleNews(state = {
  shouldShow: false,
  isLoading: false,
  news: null,
  error: false
}, action = null) {
  switch (action.type) {
    // Should not show ingle news:
    case types.SHOULD_NOT_SHOW_SINGLE_NEWS:
      return Object.assign({}, state, {
        shouldShow: false,
      });
    // Fetch single news:
    case types.SINGLE_NEWS_REQUEST:
      return Object.assign({}, state, {
        shouldShow: true,
        isLoading: true,
        news: null,
        error: false
      });
    case types.SINGLE_NEWS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        news: action.json,
        error: false
      });
    case types.SINGLE_NEWS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        news: null,
        error: true
      });
    default:
      return state;
  }
}

function newsList(state = initialListState, action = null) {

  switch (action.type) {
    // News category:
    case types.CHANGE_NEWS_CATEGORY:
      return Object.assign({}, state, {currentCategoryID: action.categoryID});
    // Fetch news list:
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

    // Fetch single news:
    case types.SINGLE_NEWS_REQUEST:
      return Object.assign({}, state, {
        currentNews: {
          isLoading: true,
          news: null,
          error: false
        }
      });
    case types.SINGLE_NEWS_SUCCESS:
      return Object.assign({}, state, {
        currentNews: {
          isLoading: false,
          news: action.json,
          error: false
        }
      });
    case types.SINGLE_NEWS_FAILURE:
      return Object.assign({}, state, {
        currentNews: {
          isLoading: false,
          news: null,
          error: true
        }
      });
    default:
      return state;
  }
}

export default combineReducers({
  singleNews,
  newsList
})