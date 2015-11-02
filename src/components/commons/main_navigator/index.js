'use strict';

import React, {
  Navigator,
  Component
} from 'react-native';

var NavigationContent = require('./navigation_content');

var NavigationBar = require('./navigation_bar');

class MainNavigator extends Component {


  _getTabName(tab) {
    switch (tab) {
      case 'news':
        return '校园新闻';
      case 'bus':
        return '校车时刻';
      case 'map':
        return '校园地图';
      case 'file':
        return '文件交换';
      case 'setting':
      default:
        return '偏好设置';
    }
  }

  componentWillReceiveProps(nextProps) {
    let title = this._getTabName(nextProps.tab);
    console.log(title);
    this.navigator.replace({
      name: title,
      index: 0,
      tab: nextProps.tab
    });
  }

  render() {

    let { tab } = this.props;
    let title = this._getTabName(tab);

    return (
      <Navigator
        ref={view => this.navigator = view}
        initialRoute={{name: title, index: 0, tab: tab}}
        renderScene={(route, navigator) =>
                    <NavigationContent
                        name={route.name}
                        tab={route.tab}
                        title={route.name}
                        onForward={() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                />
                }
        />
    );
  }
}

module.exports = MainNavigator;