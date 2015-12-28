'use strict';

var React = require('react-native');
var {
  Component,
  PropTypes,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform
  } = React;

class TabButton extends Component {

  _onClick() {
    this.props.onClick();
  }

  render() {
    let image = require('image!news');
    switch (this.props.name) {
      case 'bus':
        image = require('image!bus');
        break;
      case 'file':
        image = require('image!file');
        break;
      case 'map':
        image = require('image!map');
        break;
      case 'news':
        image = require('image!news');
        break;
      case 'setting':
      default:
        image = require('image!setting');
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper}
                          onPress={this._onClick.bind(this)}>
          <Image style={this.props.isHighlighted? styles.imageHighlighted : styles.image} source={image}/>
        </TouchableOpacity>
      </View>
    );
  }
}

TabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: 25,
    height: 25,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperHighlighted: {
    width: 25,
    height: 25,
    //borderRadius: 18,
    //backgroundColor: '#4E8F77',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    opacity: 0.75
  },
  imageHighlighted: {
    width: 25,
    height: 25,
  }
});

module.exports = TabButton;