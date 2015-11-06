'use strict';

import { Platform } from 'react-native';
//import { getIsDeviceTokenOk, checkAndGetToken} from './device_token';

var _token = '';
var _checkTokenFunction = function () {
};

export function setToken(token) {
  _token = token;
}

export function setCheckTokenFunction(func) {
  _checkTokenFunction = func;
}

export default class APIClient {

  constructor() {
    ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
      this[method] = (uri, options) => {

        _checkTokenFunction();

        return fetch(APIClient._buildURL(uri), {
          method: method.toUpperCase(),
          headers: {
            'Accept': 'application/json',
            'token': _token,
            'os': Platform.OS,
            'os_version': Platform.Version
          }
        })
      }
    })
  }

  static _buildURL(uri) {
    var baseURL;
    if (__DEV__) {
      if (Platform.OS == 'android') {
        baseURL = 'http://10.0.3.2:5000/api/v1/';
      } else {
        baseURL = 'http://localhost:5000/api/v1/';
      }
    } else {
      baseURL = 'http://h-sdufe-api.example.com/api/v1/';
    }
    return baseURL + uri;
  }

}