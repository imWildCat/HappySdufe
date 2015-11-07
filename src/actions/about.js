'use strict';

import * as types from '../constants/action_types';

export function fetchAboutPage() {
  return {
    types: [types.ABOUT_PAGE_REQUEST, types.ABOUT_PAGE_SUCCESS, types.ABOUT_PAGE_FAILURE],
    apiRequest: (client) => client.get(`about`),
  }
}
