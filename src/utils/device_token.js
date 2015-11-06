'use strict';

import APIClient, { setToken, setCheckTokenFunction } from './api_client';
import { Platform , AsyncStorage } from 'react-native';

const DEVICE_TOKEN_KEY = 'DEVICE_TOKEN';
var _isDeviceTokenOk = false;

let deviceTypeID = 1;
if (Platform.OS === 'android') {
  deviceTypeID = 2;
}

let client = new APIClient();

setCheckTokenFunction(function() {
  if(!getIsDeviceTokenOk()) {
    console.log('check');
    checkAndGetToken();
  }
});

export function checkAndGetToken() {
  _setDeviceToken(() => {
    client.get('device/check').then(
      (result) => {
        result.json().then((json)=> {
          if (!json.is_valid) {
            _requestNewToken()
          } else {
            _isDeviceTokenOk = true;
            _setDeviceToken();
          }
        });
      },
      (error) => {

      }
    );
  });
}

function _requestNewToken() {
  client.get(`token/gen/${deviceTypeID}`).then(
    (result) => {
      result.json().then((json)=> {
        let uid = json.uid;
        AsyncStorage.setItem(DEVICE_TOKEN_KEY, uid, (error) => {
          if (!error) {
            _setDeviceToken();
            _isDeviceTokenOk = true;
          }
        });
      });
    },
    (error) => {

    }
  );
}

function _setDeviceToken(callback) {
  AsyncStorage.getItem(DEVICE_TOKEN_KEY, (error, value) => {
    setToken(value);
    if(callback) {
      callback();
    }
  });
}

export function getIsDeviceTokenOk() {
  return _isDeviceTokenOk;
}