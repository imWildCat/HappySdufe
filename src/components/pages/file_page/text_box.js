'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

class TextBox extends Component {

  render() {

    let image;
    switch (this.props.image) {
      case 'paste':
        image = require('image!paste');
        break;
      case 'add':
      default :
        image = require('image!add');
    }

    let { onClick, placeholder } = this.props;

    return (

      <View>
        <View style={styles.wrapper}>
          <TextInput style={styles.textInput}
                     placeholder={placeholder}
                     keyboardType='ascii-capable'
                     autoCapitalize='none'
                     underlineColorAndroid='#FFFFFF'
            />
          <View style={styles.verticalLine}></View>
          <TouchableOpacity style={styles.imageButton} onPress={() => onClick()}>
            <Image style={styles.image} source={image}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

TextBox.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    height: 50,
    borderColor: '#F5F0E9',
    borderWidth: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    flex: 1,
    marginLeft: 13,
    fontSize: 15,
    color: '#333333',
  },
  imageButton: {
    width: 15,
    height: 15,
    marginLeft: 13,
    marginRight: 13,
  },
  image: {
    width: 15,
    height: 15,
  },
  verticalLine: {
    width: 2,
    height: 30,
    backgroundColor: '#F5F0E9',
    marginLeft: 15
  }
});

export default TextBox;