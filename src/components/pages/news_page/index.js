'use strict';

var React = require('react-native');
var {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  } = React;

let NewsList = require('./news_list');

class NewsPage extends Component {

  componentDidMount() {
    console.log(this);
    this.props.loadNewsList();
  }

  render () {

    return (
      <View style={styles.container}>
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
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

module.exports = NewsPage;