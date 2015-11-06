'use strict';

import { combineReducers } from 'redux';
import map from './map';
import news from './news';
import tab from './tab';
import file from './file';

export default combineReducers({
  map,
  news,
  tab,
  file
});