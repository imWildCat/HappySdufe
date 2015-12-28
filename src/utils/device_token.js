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

let _lastCheckTime = new Date(2000, 0, 0, 0, 0);

setCheckTokenFunction(function() {
  if(!getIsDeviceTokenOk()) {
    let now = new Date();
    // Calculate diff to avoid loop checking
    let diff = (now - _lastCheckTime) / 1000;
    if (diff >= 10) {
      checkAndGetToken();
      _lastCheckTime = now;
    }
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