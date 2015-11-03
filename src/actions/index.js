'use strict';

import map_actions from './map';
import tab_actions from './tab';

let actions = {};

Object.assign(actions,
  map_actions,
  tab_actions);

export default actions;