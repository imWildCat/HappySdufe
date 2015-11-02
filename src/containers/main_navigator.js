'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import MainNavigator from '../components/commons/main_navigator';
import * as Actions from '../actions/tab';

function mapStateToProps(state) {
  return {
    tab: state.tab
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);