'use strict';

import React,{
  StyleSheet,
  Component,
  ToolbarAndroid,
  View
} from 'react-native';

class AndroidToolBarWrapper extends Component {

  render() {

    let { onBack } = this.props;
    let otherProps = {};

    if(onBack) {
      otherProps = {
        navIcon: require('image!back_arrow'),
        onIconClicked: onBack
      }
    }

    return (
      <View>
        <ToolbarAndroid {...otherProps} {...this.props} style={styles.toolbar}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#EAE6E0',
  }
});

export default AndroidToolBarWrapper;