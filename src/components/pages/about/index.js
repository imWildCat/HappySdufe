'use strict';

import React, {
  PropTypes,
  StyleSheet,
  Component,
  View,
  ScrollView
} from 'react-native';

import HtmlRender from 'react-native-html-render';
import NavigationBar from '../../commons/navigation_bar';

import defaultHtml from './default_html';

class AboutPage extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar {...this.props} title="关于"/>
        <ScrollView style={styles.scrollView}>
          <HtmlRender
            style={styles.contentView}
            value={defaultHtml}
            onLinkPress={this._onLinkPress.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }

  _onLinkPress(url) {

  }
}

AboutPage.propTypes = {};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF9'
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  contentView: {
    flex: 1
  }
});

export default AboutPage;