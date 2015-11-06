'use strict';

import * as map_actions from './map';
import * as news_actions from './news';
import * as tab_actions from './tab';
import * as file_actions from './file';

let actions = {};

Object.assign(actions,
  map_actions,
  news_actions,
  tab_actions,
  file_actions);

export default actions;