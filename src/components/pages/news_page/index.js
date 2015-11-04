'use strict';

var React = require('react-native');
var {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  } = React;

import NavigationBar from '../../commons/navigation_bar';
import NewsList from './news_list';

import NewsCategoryNames from '../../../constants/news_category_names';

class MenuButton extends Component {

  render() {
    let textStyle = styles.menuButtonText;
    if (this.props.isHighlighted) {
      textStyle = styles.menuButtonTextHighLighted;
    }
    return (
      <TouchableOpacity style={styles.menuButtonWrapper} onPress={this.props.onClick.bind(this)}>
        <Text style={textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }

}

class NewsPage extends Component {

  constructor(props) {
    super(props);
    console.log('parent init');

  }

  _fetchNewsList(props = null) {
    //if (props) {
    //  this.props.fetchNewsList(props.news.currentCategoryID);
    //} else {
    //  this.props.fetchNewsList(this.props.news.currentCategoryID);
    //}
  }

  componentWillMount() {
    // News list array and menu
    this.newsListArray = [];

    NewsCategoryNames.forEach((name, index) => {
      this.newsListArray.push(<NewsList key={'list_' + (index + 1)} {...this.props} categoryID={index + 1} />);
    });
  }

  componentDidMount() {
    this._fetchNewsList()
  }

  componentWillReceiveProps(nextProps) {
    let categoryName = NewsCategoryNames[nextProps.news.currentCategoryID - 1];
    let categoryPages = nextProps.news[categoryName].pages;
    let hasNewPage = nextProps.news[categoryName].hasMorePage;
    if (categoryPages == 0 && hasNewPage) {
      this._fetchNewsList(nextProps);
    }
  }

  render() {
    let { news, changeNewsCategory } = this.props;
    let menuButtons = [];
    NewsCategoryNames.forEach((name, index) => {
      menuButtons.push(<MenuButton key={`btn_${index}`}
                                        isHighlighted={index + 1 == news.currentCategoryID}
                                        text={name}
                                        onClick={() => changeNewsCategory(index + 1)}/>)
    });

    return (
      <View style={styles.container}>
        <NavigationBar title='校园新闻'/>
        <View style={styles.scrollViewWrapper}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {menuButtons}
          </ScrollView>
        </View>
        <View style={styles.listView}>
          {this.newsListArray[news.currentCategoryID-1]}
        </View>
      </View>
    );
  }
}

NewsPage.propTypes = {
  news: PropTypes.object.isRequired,
  changeNewsCategory: PropTypes.func.isRequired
};

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewWrapper: {
    height: 30,
    backgroundColor: '#4DA785',
  },
  menuButtonWrapper: {
    height: 30,
    width: 58,
    //backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  menuButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    //fontWeight: '600'
  },
  menuButtonTextHighLighted: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  listView: {
    flex: 1
  }
});

module.exports = NewsPage;