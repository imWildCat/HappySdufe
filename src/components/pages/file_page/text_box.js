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

    let { placeholder, style, value } = this.props;

    return (
      <View style={style}>
        <View style={styles.wrapper}>
          <TextInput style={styles.textInput}
                     value={value}
                     placeholder={placeholder}
                     keyboardType='ascii-capable'
                     autoCapitalize='none'
                     underlineColorAndroid='#FFFFFF'
                     onChangeText={this._onValueChage.bind(this)}
            />
          <View style={styles.verticalLine}></View>
          <TouchableOpacity style={styles.imageButton} onPress={this._onButtonClick.bind(this)}>
            <Image style={styles.image} source={image}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onValueChage(text) {
    this.text = text;
  }

  _onButtonClick() {
    this.props.onClick(this.text);
  }
}

TextBox.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

let styles = StyleSheet.create({
  wrapper: {
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
    color: '#A7A4A0',
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