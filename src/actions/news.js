'use strict';

let types = require('../constants/action_types');

export function loadNewsList(categoryID = 0, page = 1) {
  return {
    types: [types.NEWS_LIST_REQUEST, types.NEWS_LIST_SUCCESS, types.NEWS_LIST_FAILURE],
    apiRequest: (client) => client.get(`news/category/${categoryID}/page/${page}`)
  }
}

export function changeNewsCategory(categoryID = 1) {
  return {
    type: types.CHANGE_NEWS_CATEGORY,
    categoryID: categoryID
  }
}

export function loadSingleNews(newsID) {
  return {
    type: types.LOAD_SINGLE_NEWS,
    id: newsID
  }
}

export function closeSingleNews() {
  return {
    type: types.CLOSE_SINGLE_NEWS
  }
}
