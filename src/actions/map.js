'use strict';

let types = require('../constants/action_types');

export function changeMapCampus(campusID = 4) {
  return {
    type: types.CHANGE_MAP_CAMPUS,
    campusID: campusID
  }
}



