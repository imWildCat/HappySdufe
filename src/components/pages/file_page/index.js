'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';
import TextBox from './text_box';

class FilePage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='文件交换' />
        <TextBox
          image='add'
          onClick={this._onTextBoxClick.bind(this)}
          placeholder='请输入提取码'
          />
      </View>
    )
  }

  _onTextBoxClick() {

  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default FilePage;