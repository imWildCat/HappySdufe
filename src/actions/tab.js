'use strict';

let types = require('../constants/action_types');

export function switchToTabBus() {
  return {
    type: types.TAB_BUS
  }
}

export function switchToTabFile() {
  return {
    type: types.TAB_FILE
  }
}

export function switchToTabMap() {
  return {
    type: types.TAB_MAP
  }
}

export function switchToTabNews() {
  return {
    type: types.TAB_NEWS
  }
}

export function switchToTabSetting() {
  return {
    type: types.TAB_SETTING
  }
}

