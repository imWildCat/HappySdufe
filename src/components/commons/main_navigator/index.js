'use strict';

import React, {
  Navigator,
  Component,
  ActionSheetIOS
} from 'react-native';

var NavigationContent = require('./navigation_content');

import SingleNewsContainer from '../../../containers/single_news_page';

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

  _detectIfShouldShowSingleNews(nextProps = null) {
    var props = nextProps;
    if (props == null) {
      props == this.props;
    }

    let { shouldShowSingleNews, shouldNotShowSingleNews } = props;

    if (shouldShowSingleNews) {
      this.navigator.push({
        name: '阅读新闻',
        index: 1,
        componentName: 'SingleNewsContainer',
      });
      shouldNotShowSingleNews();
    }
  }

  componentWillReceiveProps(nextProps) {
    this._detectIfShouldShowSingleNews(nextProps);
    let title = this._getTabName(nextProps.tab);

    if (this.props.tab !== nextProps.tab) {

      this.navigator.replace({
        name: title,
        index: 0,
        tab: nextProps.tab
      });
    }
  }

  _renderScene(route, navigator) {

    if(route.componentName) {
      switch (route.componentName) {
        case 'SingleNewsContainer':
          default:
            return (
              <SingleNewsContainer
                onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                />
            )
      }
    }

    return (<NavigationContent
      name={route.name}
      tab={route.tab}
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
      />)
  }

  render() {
    let {tab , map} = this.props;

    // Title
    let title = this._getTabName(tab);

    return (
      <Navigator
        ref={view => this.navigator = view}
        initialRoute={{name: title, index: 0, tab: tab}}
        renderScene={this._renderScene}
        />
    );
  }
}

module.exports = MainNavigator;