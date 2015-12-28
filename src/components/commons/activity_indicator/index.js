'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';

class ActivityIndicator extends Component {

  render() {

    let { autoMargin } = this.props;
    let style = styles.default;
    if (autoMargin) {
      style = styles.autoMargin;
    }

    return (
      <View style={style}>
        <Text>加载中...</Text>
      </View>
    )
  }
}

ActivityIndicator.propTypes = {
  autoMargin: PropTypes.bool
};

let styles = StyleSheet.create({
  default: {},
  autoMargin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ActivityIndicator;