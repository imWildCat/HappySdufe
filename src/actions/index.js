'use strict';

import * as map_actions from './map';
import * as news_actions from './news';
import * as tab_actions from './tab';
import * as file_actions from './file';
import * as about_actions from './about';

let actions = {};

Object.assign(actions,
  map_actions,
  news_actions,
  tab_actions,
  file_actions,
  about_actions);

export default actions;