'use strict';

import React, {
  Component,
  Proptypes,
  ScrollView,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import HtmlRender from 'react-native-html-render';

import content from './content';

class BusPage extends Component {

  render() {

    return (
      <View style={styles.container}>

        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <HtmlRender
            style={styles.contentView}
            value={content}
            stylesheet={contentStyles}
            />
        </ScrollView>
      </View>
    )
  }
}

let contentStyles = StyleSheet.create({
  p: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
    margin: 1,
    padding: 1
  },
  div: {
    paddingLeft: 50
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10
  },
  contentView: {
    margin: 5,
    flex: 1
  }
  //capital: {
  //  fontSize: 16,
  //  fontWeight: '500',
  //  color: '#333333',
  //  textAlign: 'center'
  //},
  //normalLine: {
  //  fontSize: 16,
  //  color: '#333333',
  //}

});

export default BusPage;