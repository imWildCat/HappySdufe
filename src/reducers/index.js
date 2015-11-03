'use strict';

import { combineReducers } from 'redux';
import map from './map';
import news from './news';
import tab from './tab';

export default combineReducers({
  map,
  news,
  tab
});