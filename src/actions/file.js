'use strict';

import * as types from '../constants/action_types';

export function addFileCode(code) {
  return {
    types: [types.FILE_CODE_ADD_REQUEST, types.FILE_CODE_ADD_SUCCESS, types.FILE_CODE_ADD_FAILURE],
    apiRequest: (client) => client.get(`file_code/add/${code}`),
    code: code,
  }
}

export function fetchFileCodeList() {
  return {
    types: [types.FILE_CODE_LIST_REQUEST, types.FILE_CODE_LIST_SUCCESS, types.FILE_CODE_LIST_FAILURE],
    apiRequest: (client) => client.get(`file_code/list`),
  }
}

export function fetchSingleFileCode(codeID) {
  return {
    types: [types.FILE_CODE_SINGLE_REQUEST, types.FILE_CODE_SINGLE_SUCCESS, types.FILE_CODE_SINGLE_FAILURE],
    apiRequest: (client) => client.get(`file_code/${codeID}`),
    codeID: codeID
  }
}