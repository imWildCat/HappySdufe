'use strict';

import map_actions from './map';
import news_actions from './news';
import tab_actions from './tab';

let actions = {};

Object.assign(actions,
  map_actions,
  news_actions,
  tab_actions);

export default actions;