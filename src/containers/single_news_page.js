'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import SingleNewsPage from '../components/pages/single_news';
import * as NewsActions from '../actions/news';

function mapStateToProps(state) {
  return {
    state: state.news.singleNews,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNewsPage);