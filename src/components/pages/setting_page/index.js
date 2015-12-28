'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';

import Toast from '../../../modules/toast';

class SettingPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='偏好设置'/>
        <View style={styles.settingBlockWrapper}>
          <TouchableOpacity onPress={this._onClearCacheButtonPress.bind(this)}>
            <Text style={styles.settingLabel}>清理缓存</Text>
          </TouchableOpacity>

          <View style={styles.line}>
          </View>

          <TouchableOpacity onPress={this._onAboutButtonPress.bind(this)}>
            <Text style={styles.settingLabel}>关于</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onAboutButtonPress() {
    let { onForward } = this.props;
    onForward('AboutPageContainer');
  }

  _onClearCacheButtonPress() {
    Toast.show('缓存已清理');
  }


}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingBlockWrapper: {
    borderColor: '#F5F0E9',
    borderWidth: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    margin: 16
  },
  line: {
    backgroundColor: '#F5F0E9',
    marginLeft: 16,
    marginRight: 16,
    height: 2,
  },
  settingLabel: {
    flex: 1,
    fontSize: 16,
    margin: 10,
    marginLeft: 16,
    marginRight: 16,
    color: '#333333'
  }
});

export default SettingPage;