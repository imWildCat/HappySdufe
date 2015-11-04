'use strict';

let types = require('../constants/action_types');

export function fetchNewsList(categoryID = 1, page = 1) {
  return {
    types: [types.NEWS_LIST_REQUEST, types.NEWS_LIST_SUCCESS, types.NEWS_LIST_FAILURE],
    apiRequest: (client) => client.get(`news/category/${categoryID}/page/${page}`),
    categoryID: categoryID,
    page: page,
  }
}

export function fetchSingleNews(newsID) {
  return {
    types: [types.SINGLE_NEWS_REQUEST, types.SINGLE_NEWS_SUCCESS, types.SINGLE_NEWS_FAILURE],
    apiRequest: (client) => client.get(`news/id/${newsID}`)
  }
}

export function changeNewsCategory(categoryID = 1) {
  return {
    type: types.CHANGE_NEWS_CATEGORY,
    categoryID: categoryID
  }
}

export function shouldNotShowSingleNews() {
  return {
    type: types.SHOULD_NOT_SHOW_SINGLE_NEWS
  }
}
