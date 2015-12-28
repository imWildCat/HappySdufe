'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';

import moment from '../../../utils/moment';
import NewsCategoryNames from '../../../constants/news_category_names';

class NewsList extends Component {

  constructor(props) {
    super(props);
  }

  static _generateDataSource(pageData) {
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return dataSource.cloneWithRows(pageData)
  }

  _getNewsListData(props = null) {
    var news, categoryID;
    if (props) {
      news = props.news;
      categoryID = props.categoryID;
    } else {
      news = this.props.news;
      categoryID = this.props.categoryID;
    }

    let currentCategoryName = NewsCategoryNames[categoryID - 1];
    return news[currentCategoryName];
  }

  componentDidMount() {
    this.props.fetchNewsList(this.props.categoryID);
  }

  render() {
    let { fetchSingleNews } = this.props;
    let newsListData = this._getNewsListData();
    let currentCategoryPages = newsListData.pages;

    if (currentCategoryPages.length > 0) {
      let currentPageData = [];
      currentCategoryPages.forEach((singlePage) => {
        currentPageData = currentPageData.concat(singlePage)
      });

      return (
        <ListView
          dataSource={NewsList._generateDataSource(currentPageData)}
          renderFooter={this._renderFooter.bind(this)}
          renderRow={
          (rowData) =>
          <NewsListRow
            key={`news_${rowData.id}`}
            data={rowData}
            fetchSingleNews={fetchSingleNews} />
            }
          />
      );
    } else {
      return (
        <View style={parentStyles.notFoundWrapper}>
          <View style={parentStyles.notFoundTextWrapper}>
            <Text>加载中...</Text>
          </View>
        </View>
      )
    }
  }

  _loadMorePage() {
    let { fetchNewsList, categoryID } = this.props;
    if (this._getNewsListData().hasMorePage) {
      fetchNewsList(categoryID, this._getNewsListData().page + 1);
    } else {

    }
  }

  _onFooterClick() {
    this._loadMorePage()
  }

  _renderFooter() {
    let newsListData = this._getNewsListData();
    let text = '';
    if (newsListData.isLoadingMore) {
      text = '加载中...';
    } else if (newsListData.hasMorePage) {
      text = '点击加载更多'
    } else {
      text = '已全部加载完毕';
    }
    return (
      <View style={parentStyles.headerAndFooterWrapper}>
        <Text onPress={this._onFooterClick.bind(this)} style={parentStyles.text}>
          {text}
        </Text>
      </View>
    );
  }
}

let parentStyles = StyleSheet.create({
  notFoundWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  notFoundTextWrapper: {
    flex: 1,
    paddingTop: 30
  },
  headerAndFooterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  footerText: {}
});

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
  fetchSingleNews: PropTypes.func.isRequired,
  categoryID: PropTypes.number.isRequired
};


class NewsListRow extends Component {

  render() {
    let { data, fetchSingleNews } = this.props;
    return (
      <TouchableHighlight underlayColor='#D8D8D8' onPress={() => {
        if (data.id) {
          fetchSingleNews(data.id);
        } else {
          console.log('ID of this news is not defined.');
        }
      }}>
        <View style={styles.rowWrapper}>
          <View>
            <Text style={styles.title}>
              {data.title}
            </Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.editorText}>
              {data.editor}
            </Text>
            <Text style={styles.dateText}>
              {moment(data.date).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

NewsListRow.propTypes = {
  data: PropTypes.object.isRequired,
  fetchSingleNews: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
  rowWrapper: {
    marginLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    marginTop: 16,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    color: "#333333",
  },
  meta: {
    marginTop: 5,
    flexDirection: 'row',
  },
  editorText: {
    color: '#747474',
    flex: 1,
  },
  dateText: {
    color: '#747474',
    flex: 1,
    textAlign: 'right'
  },
});

export default NewsList;