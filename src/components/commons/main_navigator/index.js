'use strict';

import React, {
  Navigator,
  Component,
  ActionSheetIOS
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

    if (this.props.tab !== nextProps.tab) {

      this.navigator.replace({
        name: title,
        index: 0,
        tab: nextProps.tab
      });
    }
  }

  _showActionSheet() {
    let BUTTONS = [
      '舜耕校区',
      '燕山校区',
      '圣井校区',
      '明水校区',
      '取消',
    ];
    var CANCEL_INDEX = 4;

    ActionSheetIOS.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        //destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      (buttonIndex) => {
        this.props.changeMapCampus(buttonIndex);
        //this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  }

  render() {

    let {tab , map} = this.props;

    // Title
    let title = this._getTabName(tab);

    // Title for map
    if (tab === 'map' && map.campus !== 'none') {
      let campus = '';
      switch (map.campus) {
        case 'shungeng':
          campus = '舜耕';
          break;
        case 'yanshan':
          campus = '燕山';
          break;
        case 'shengjing':
          campus = '圣井';
          break;
        case 'mingshui':
        default:
          campus='明水'

      }
      title += `（${campus}）`;
    }

    // Right button
    let rightBarButtonText = '';
    if (tab === 'map') {
      rightBarButtonText = '选择校区';
    }

    return (
      <Navigator
        ref={view => this.navigator = view}
        initialRoute={{name: title, index: 0, tab: tab}}
        renderScene={(route, navigator) =>
                    <NavigationContent
                        name={route.name}
                        tab={route.tab}
                        title={title}
                        rightBarButtonText={rightBarButtonText}
                        onRightBarButtonClick={() => {this._showActionSheet()}}
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