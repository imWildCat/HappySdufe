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
    console.log(this.state);
    return (
      <View style={styles.container}>
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

