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
import FileCodeList from './file_code_list';

class FilePage extends Component {

  componentDidMount() {
    this.props.fetchFileCodeList()
  }

  render() {

    let { file } = this.props;

    return (
      <View style={styles.container}>
        <NavigationBar title='文件交换' />
        <TextBox
          image='add'
          onClick={this._onTextBoxClick.bind(this)}
          placeholder='请输入提取码'
          />
        <FileCodeList files={file.fileList.files} />
      </View>
    )
  }

  _onTextBoxClick(text) {
    if(text && text !== '') {
      this.props.addFileCode(text);
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default FilePage;