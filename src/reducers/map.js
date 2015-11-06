'use strict';

import * as types from '../constants/action_types' ;

let initialState = {
  campus: 'none'
};

export default function (state = initialState, action = null) {

  switch (action.type) {
    case types.CHANGE_MAP_CAMPUS:
      let campus;
      switch (action.campusID) {
        case 0:
          campus = 'shungeng';
          break;
        case 1:
          campus = 'yanshan';
          break;
        case 2:
          campus = 'shengjing';
          break;
        case 3:
          campus = 'mingshui';
          break;
        case 4:
          campus = 'none';
      }
      return Object.assign({}, state, {
        campus: campus
      });
    default:
      return state;
  }
}