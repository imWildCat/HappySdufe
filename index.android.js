/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
} from 'react-native';

import EntryComponent from './src/components/commons/entry';

var HappySdufe = React.createClass({
  render: function() {
    return (
      <EntryComponent />
    );
  }
});

AppRegistry.registerComponent('HappySdufe', () => HappySdufe);