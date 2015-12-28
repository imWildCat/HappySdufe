'use strict';

import React,{
  Component,
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class NavigationBar extends Component {

  render() {

    let { onBack } = this.props;
    let backText = '';
    if(onBack) {
      backText = '< 返回';
    }

    return (
      <View style={styles.container}>
        <View style={styles.barButton}>
          <TouchableOpacity onPress={() => this.props.onBack()}>
            <Text style={styles.barButtonText}>{backText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.barButton}>
          <TouchableOpacity onPress={() => this.props.onRightBarButtonClick()}>
            <Text style={styles.barButtonText}>{this.props.rightBarButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  rightBarButtonText: PropTypes.string,
  onRightBarButtonClick: PropTypes.func,
  onBack: PropTypes.func
};

var styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#F6F2EC',
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333'
  },
  barButton: {
    width: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
    //backgroundColor: 'red'
  },
  barButtonText: {
    fontSize: 15,
  }
});


export default NavigationBar;