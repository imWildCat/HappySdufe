'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

let NewsList = require('./news_list');

var NewsPage = React.createClass({
    render: function() {
        return (
          <View style={{ flex: 1}}>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
          </View>
        );
    }
});

module.exports = NewsPage;