'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FilePage extends Component {

  render() {
    return (
      <View style={styles.container}>
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