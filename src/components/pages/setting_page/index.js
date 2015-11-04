'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';

class SettingPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='偏好设置' />
        <Text>This is setting page</Text>
      </View>
    )
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default SettingPage;