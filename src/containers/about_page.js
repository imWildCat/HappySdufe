'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import AboutPage from '../components/pages/about';
import * as AboutActions from '../actions/about';

function mapStateToProps(state) {
  return {
    currentFileCode: state.file.currentFileCode
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AboutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);