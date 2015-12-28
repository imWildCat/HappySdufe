'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import MainNavigator from '../components/commons/main_navigator';
import * as MapActions from '../actions/map';
import * as NewsActions from '../actions/news';

function mapStateToProps(state) {
  return {
    tab: state.tab.slug,
    map: state.map,
    shouldShowSingleNews: state.news.singleNews.shouldShow
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, MapActions, NewsActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);