'use strict';

import { combineReducers } from 'redux';
import map from './map';
import tab from './tab';

export default combineReducers({
  map,
  tab
});