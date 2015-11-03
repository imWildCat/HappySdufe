'use strict';

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
    return 'http://localhost:5000/api/v1/' + uri;
  }

}