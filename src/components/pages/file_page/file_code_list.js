'use strict';

import React, {
  PropTypes,
  StyleSheet,
  Component,
  View,
  Text,
  ListView
} from 'react-native';

import moment from '../../../utils/moment';

class FileCodeList extends Component {

  static _generateDataSource(files) {
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return dataSource.cloneWithRows(files)
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={FileCodeList._generateDataSource(this.props.files)}
          renderRow={this._renderRow}/>
      </View>
    )
  }

  _renderRow(rowData) {
    let createdAt = '刚才';
    if (rowData.created_at) {
      createdAt = moment(rowData.created_at).fromNow();
    }
    let status = '';
    if (!rowData.is_downloaded) {
      status = '服务器缓存中';
    }
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.fileCodeDescription}>{rowData.description}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.statusText}>{status}</Text>
          <Text style={styles.fileCodeCreatedTime}>{createdAt}</Text>
        </View>
      </View>
    )
  }
}

FileCodeList.propTypes = {
  files: PropTypes.array.isRequired
};

let styles = StyleSheet.create({

  // Row
  rowContainer: {
    marginLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    marginTop: 16,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1
  },
  fileCodeDescription: {
    fontSize: 16,
    color: '#333333'
  },
  metaContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  statusText: {
    flex: 1,
    fontSize: 14,
    color: 'red'
  },
  fileCodeCreatedTime: {
    flex: 1,
    fontSize: 14,
    color: '#747474',
    textAlign: 'right'
  }
});

export default FileCodeList;