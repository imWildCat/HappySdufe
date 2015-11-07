'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import FileDetailPage from '../components/pages/file_detail_page';
import * as FileAction from '../actions/file';

function mapStateToProps(state) {
  return {
    currentFileCode: state.file.currentFileCode
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FileDetailPage);