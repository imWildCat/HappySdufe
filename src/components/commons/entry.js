'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';

import configureStore from '../../store/configure_store';
import MainNavigator from './main_navigator';

const store = configureStore();

window.store = store;

export default class EntryComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <MainNavigator />}
      </Provider>
    )
  }
}