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

import Toast from '../../../modules/toast';

class FilePage extends Component {

  componentDidMount() {
    this.props.fetchFileCodeList()
  }

  render() {

    let { fileList } = this.props;

    return (
      <View style={styles.container}>
        <NavigationBar title='文件交换' />
        <TextBox
          style={styles.textBox}
          image='add'
          onClick={this._onTextBoxClick.bind(this)}
          placeholder='请输入提取码'
          />
        <FileCodeList files={fileList.files} onRowPress={this._onRowPress.bind(this)}/>
      </View>
    )
  }

  _onTextBoxClick(text) {
    if(text && text !== '') {
      this.props.addFileCode(text);
      Toast.show('提取码已添加');
    } else {
      Toast.show('请输入提取码');
    }
  }

  _onRowPress(codeID) {
    let { onForward, fetchSingleFileCode } = this.props;
    onForward('FileDetailPageContainer');
    fetchSingleFileCode(codeID);
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    margin: 16
  }
});

export default FilePage;