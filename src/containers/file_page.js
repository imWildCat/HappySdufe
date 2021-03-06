'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import FilePage from '../components/pages/file_page';
import * as FileAction from '../actions/file';

function mapStateToProps(state) {
  return {
    fileList: state.file.fileList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilePage);