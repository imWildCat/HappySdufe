'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  } from 'react-native';

import TabButton from './tab_button';

class TabView extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {

    let {tab, switchToTabNews, switchToTabBus, switchToTabMap,
      switchToTabFile, switchToTabSetting} = this.props;

    return (
      <View style={styles.container}>
        <TabButton name='news' onClick={() => switchToTabNews()} isHighlighted={'news' === tab} />
        <TabButton name='bus' onClick={() => switchToTabBus()} isHighlighted={'bus' === tab} />
        <TabButton name='map' onClick={() => switchToTabMap()} isHighlighted={'map' === tab} />
        <TabButton name='file' onClick={() => switchToTabFile()} isHighlighted={'file' === tab} />
        <TabButton name='setting' onClick={() => switchToTabSetting()} isHighlighted={'setting' === tab} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#4DA785',
    height: 60,
    flexDirection: 'row',
    // bottom: 0
  },

});

module.exports = TabView;