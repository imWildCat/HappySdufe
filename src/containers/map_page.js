'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import MapPage from '../components/pages/map_page';
import * as MapActions from '../actions/map';

function mapStateToProps(state) {
  return {
    map: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MapActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);