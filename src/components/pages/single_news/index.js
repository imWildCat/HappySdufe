'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import HtmlRender from 'react-native-html-render';

import moment from '../../../utils/moment';
import NavigationBar from '../../commons/navigation_bar';
import ActivityIndicator from '../../commons/activity_indicator';

class SingleNewsPage extends Component {

  _onLinkPress(url) {
    console.log(url);
  }

  render() {
    let { state } = this.props;

    let content;
    if (state.isLoading) {
      content = <ActivityIndicator autoMargin={true}/>;
    } else {
      let news = state.news;
      content = (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>{news.title}</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.editorText}>{news.editor}</Text>
            <Text style={styles.dateText}>{moment(news.date).format('YYYY-MM-DD HH:mm:ss')}</Text>
          </View>
          <HtmlRender
            style={styles.contentView}
            value={news.content}
            stylesheet={contentStyles}
            onLinkPress={this._onLinkPress.bind(this)}
            />
        </ScrollView>
      );
    }
    return (
      <View style={styles.container}>
        <NavigationBar title='阅读新闻' onBack={this.props.onBack}/>
        {content}
      </View>
    )
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF9'
  },
  scrollView: {
    padding: 16
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333'
  },
  metaContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16
  },
  editorText: {
    flex: 1,
    color: '#747474',
    fontSize: 14
  },
  dateText: {
    flex: 1,
    color: '#747474',
    textAlign: 'right',
    fontSize: 14
  },
  contentView: {}
});

let contentStyles = StyleSheet.create({
  p: {
    fontSize: 16,
    color: '#333333'
  },
  div: {
    fontSize: 16,
    color: '#333333'
  }
});

export default SingleNewsPage;