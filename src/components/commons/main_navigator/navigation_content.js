'use strict';

var React = require('react-native');
var {
  View,
  } = React;

var NavigationBar = require('./navigation_bar');

var TabView = require('../tab_view');

import TabViewContainer from '../../../containers/tab_view';

var NewsPage = require('../../pages/news_page');

var NavigationContent = React.createClass({

  render: function () {
    return (
      <View style={{ flex: 1}}>
        <NavigationBar />
        <NewsPage />
        <TabViewContainer />
      </View>
    );
  }
});

module.exports = NavigationContent;