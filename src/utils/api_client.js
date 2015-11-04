'use strict';

import { Platform } from 'react-native';

export default class APIClient {

  constructor() {
    ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
      this[method] = (uri, options) => {
        return fetch(APIClient._buildURL(uri), {
          method: method.toUpperCase(),
          headers: {
            'Accept': 'application/json',
          }
        })
      }
    })
  }

  static _buildURL(uri) {
    var baseURL;
    if(__DEV__) {
      if (Platform.OS == 'android') {
        baseURL =  'http://10.0.3.2:5000/api/v1/';
      } else {
        baseURL =  'http://localhost:5000/api/v1/';
      }
    } else {
      baseURL =  'http://h-sdufe-api.example.com/api/v1/';
    }
    return baseURL + uri;
  }

}