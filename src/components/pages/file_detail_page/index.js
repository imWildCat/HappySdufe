'use strict';

import React, {
  StyleSheet,
  PropTypes,
  Component,
  View,
  Text,
  ScrollView
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';
import ActivityIndicator from '../../commons/activity_indicator';
import TextBox from '../file_page/text_box';

import moment from '../../../utils/moment';

import Toast from '../../../modules/toast';
import Pasteboard from '../../../modules/pasteboard';


class FileDetailPage extends Component {

  render() {

    let { currentFileCode } = this.props;
    let { data, isLoading } = currentFileCode;
    let content;

    if (isLoading) {
      content = <ActivityIndicator autoMargin={true}/>
    } else {
      let files = this._renderFiles(data);
      content = <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{ data.code }</Text>
        <Text style={styles.date}>{ '缓存日期:  ' + moment(data.created_at).format('YYYY-MM-DD') }</Text>
        {files}
      </ScrollView>
    }

    return (
      <View style={styles.container}>
        <NavigationBar {...this.props} title="文件下载"/>
        { content }
      </View>
    )
  }

  _renderFiles(data) {
    let files = data.files;
    var index = 0;
    return (
      <View style={styles.fileContainer}>
        {
          files.map((file) => {
            let key = 'file' + index;
            index++;
            return (
              <View key={key} style={styles.singleFileWrapper}>
                <Text style={styles.fileName}>{file.name}</Text>
                <Text style={styles.downloadText}>下载地址:</Text>
                <TextBox image="paste" value={file.url} onClick={()=>this._copyURL(file.url)}/>
              </View>
            )
          })
        }
      </View>
    )
  }

  _copyURL(url) {
    Pasteboard.set(url);
    Toast.show('下载地址已复制');
  }
}

FileDetailPage.propTypes = {};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF9'
  },
  scrollView: {
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333'
  },
  date: {
    fontSize: 14,
    color: '#747474',
    textAlign: 'right'
  },
  fileContainer: {
    marginTop: 20,
  },
  singleFileWrapper: {
    marginBottom: 16,
  },
  fileName: {
    fontSize: 16,
    color: '#333333'
  },
  downloadText: {
    fontSize: 14,
    color: '#747474',
    marginTop: 10,
  }
});

export default FileDetailPage;
