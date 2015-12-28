'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import TabView from '../components/commons/tab_view';
import * as Actions from '../actions/tab';

function mapStateToProps(state) {
  return {
    tab: state.tab.slug
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabView);