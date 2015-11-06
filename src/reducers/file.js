'use strict';

import { combineReducers } from 'redux';

import * as types from '../constants/action_types' ;

function fileList(state = {
  files: [],
  isLoading: false,
}, action) {
  switch (action.type) {
    case types.FILE_CODE_ADD_REQUEST:
      return Object.assign({}, state, {isLoading: true});
    case types.FILE_CODE_ADD_SUCCESS:
      var files = state.files.slice();
      let fileCode = action.json;
      let newElement = {
        id: fileCode.file_code_id,
        description: fileCode.file_names[0],
        is_downloaded: fileCode.is_downloaded,
        created_at: null
      };
      files.unshift(newElement);
      return Object.assign({}, state, {
        isLoading: false,
        files: files
      });
    case types.FILE_CODE_ADD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    case types.FILE_CODE_LIST_REQUEST:
      return Object.assign({}, state, {isLoading: true});
    case types.FILE_CODE_LIST_SUCCESS:
      var files = action.json.file_codes;
      return Object.assign({}, state, {
        isLoading: false,
        files: files
      });
    case types.FILE_CODE_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
      });
    default:
      return state;
  }
}

export default combineReducers({
  fileList,
})