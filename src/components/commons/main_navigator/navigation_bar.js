'use strict';

var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  } = React;

var NavigationBar = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.barButton}></View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Title</Text>
        </View>
        <View style={styles.barButton}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#F6F2EC',
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333'
  },
  barButton: {
    width: 60,
    //backgroundColor: 'red'
  }
});

module.exports = NavigationBar;