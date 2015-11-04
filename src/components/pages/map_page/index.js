'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View,
  MapView,
  PropTypes,
} from 'react-native';

import NavigationBar from '../../commons/navigation_bar';

import points from './points';

import CampusRegions from './campus_regions';

class MapPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      region: CampusRegions.shungeng,
      annotations: points
    };
  }

  _showActionSheet() {
    let BUTTONS = [
      '舜耕校区',
      '燕山校区',
      '圣井校区',
      '明水校区',
      '取消',
    ];
    var CANCEL_INDEX = 4;

    ActionSheetIOS.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        //destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      (buttonIndex) => {
        this.props.changeMapCampus(buttonIndex);
        //this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  }

  componentWillReceiveProps(nextProps) {
    let region;
    if (nextProps.map.campus !== 'none') {
      region = CampusRegions[nextProps.map.campus];
    }
    this.setState({
      region: region || this.state.region
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='校园地图' />
        <MapView style={styles.map}
                 region={this.state.region || undefined}
                 annotations={this.state.annotations || undefined}
          />
      </View>
    )
  }
}

MapPage.propTypes = {
  map: PropTypes.object.isRequired
};

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default MapPage;

