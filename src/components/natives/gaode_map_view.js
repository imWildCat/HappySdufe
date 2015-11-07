'use strict';

import React, { requireNativeComponent, PropTypes } from 'react-native';

let iface = {
  name: 'MCGaodeMapView',
  propTypes: {
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    translateY: PropTypes.number,
    translateX: PropTypes.number,
    rotation: PropTypes.number,
    // Custom
    region: PropTypes.shape({
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired
    }),
    annotations: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      longitude: React.PropTypes.number.isRequired,
      latitude: React.PropTypes.number.isRequired
    })),
  },
};

export default requireNativeComponent('MCGaodeMapView', iface);