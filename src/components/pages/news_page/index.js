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

  componentDidMount() {
    this.props.loadNewsList();
  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    let { news, changeNewsCategory } = this.props;
    let menuButtons = [];
    NewsCategoryNames.forEach((name, index) => {
      menuButtons.push(<MenuButton key={`btn_${index}`}
                                   isHighlighted={index+1 == news.currentCategoryID}
                                   text={name}
                                   onClick={() => changeNewsCategory(index + 1)} />)
    });

    return (
      <View style={styles.container}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {menuButtons}
          </ScrollView>
        </View>
        <View style={styles.listView}>
          <NewsList {...this.props} />
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