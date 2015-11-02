'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SettingPage extends Component {

  render() {
    return (
      <View style={styles.container}>
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