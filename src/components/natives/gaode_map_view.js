'use strict';

import { requireNativeComponent } from 'react-native';

let iface = {
  name: 'MCGaodeMapView',
  propTypes: {
    //src: PropTypes.string,
    //borderRadius: PropTypes.number,
    //resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
  },
};

export default requireNativeComponent('MCGaodeMapView', iface);