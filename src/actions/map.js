'use strict';

import * as types from '../constants/action_types' ;

export function changeMapCampus(campusID = 4) {
  return {
    type: types.CHANGE_MAP_CAMPUS,
    campusID: campusID
  }
}



