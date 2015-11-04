'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';

class FilePage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='文件交换' />
        <Text>This is file page</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default FilePage;