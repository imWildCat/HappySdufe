'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import NewsPage from '../components/pages/news_page';
import * as NewsActions from '../actions/news';

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);