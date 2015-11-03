'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import MainNavigator from '../components/commons/main_navigator';
import * as MapActions from '../actions/map';

function mapStateToProps(state) {
  return {
    tab: state.tab.slug,
    map: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MapActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);