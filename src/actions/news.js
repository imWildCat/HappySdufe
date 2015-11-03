'use strict';

let types = require('../constants/action_types');

export function loadNewsList(categoryID = 0, page = 1) {
  return {
    types: [types.NEWS_LIST_REQUEST, types.NEWS_LIST_SUCCESS, types.NEWS_LIST_FAILURE],
    apiRequest: (client) => client.get(`news/category/${categoryID}/page/${page}`)
  }
}


