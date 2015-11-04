'use strict';

import React, {
  Component,
  Proptypes,
  StyleSheet,
  Text,
  View,
  MapView,
  PropTypes,
  ActionSheetIOS,
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
    console.log(this);
    let BUTTONS = [
      '舜耕校区',
      '燕山校区',
      '圣井校区',
      '明水校区',
      '取消',
    ];
    var CANCEL_INDEX = 4;

    let { changeMapCampus } = this.props;
    ActionSheetIOS.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        //destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      (buttonIndex) => {
        changeMapCampus(buttonIndex);
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

    let { map } = this.props;

    // Title
    let title = '校园地图';

    let campus;
    switch (map.campus) {
      case 'mingshui':
        campus = '明水';
        break;
      case 'yanshan':
        campus = '燕山';
        break;
      case 'shengjing':
        campus = '圣井';
        break;
      default:
      case 'shungeng':
        campus = '舜耕';
    }
    title += `（${campus}）`;

    return (
      <View style={styles.container}>
        <NavigationBar title={title} rightBarButtonText='选择校区'
                       onRightBarButtonClick={this._showActionSheet.bind(this)}/>
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

