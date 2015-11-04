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

  static _generateDataSource(pageData) {
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return dataSource.cloneWithRows(pageData)
  }

  render() {
    let { news, fetchSingleNews } = this.props;
    let currentCategoryName = NewsCategoryNames[news.currentCategoryID - 1];
    let currentCategoryPages = news[currentCategoryName].pages;

    if (currentCategoryPages.length > 0) {
      let currentPageData = currentCategoryPages[0];

      return (
        <ListView
          dataSource={NewsList._generateDataSource(currentPageData)}
          renderRow={(rowData) => <NewsListRow
          key={`news_${rowData.id}`}
          data={rowData}
          fetchSingleNews={fetchSingleNews} />}
          />
      );
    } else {
      return (
        <View style={parentStyles.notFoundWrapper}>
          <View style={parentStyles.notFoundTextWrapper}>
            <Text>没有找到这个分类下的相关新闻。</Text>
          </View>
        </View>
      )
    }

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
  }
});

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
  fetchSingleNews: PropTypes.func.isRequired,
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
    fontWeight: 'bold',
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