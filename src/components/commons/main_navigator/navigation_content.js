'use strict';

import React, {
  Component,
  PropTypes,
  View,
} from 'react-native';

import NavigationBar from './navigation_bar';

import TabView from '../tab_view';

import TabViewContainer from '../../../containers/tab_view';

import BusPage from '../../pages/bus_page';
import FilePage from '../../pages/file_page';
import MapPage from '../../pages/map_page';
import NewsPage from '../../pages/news_page';
import SettingPage from '../../pages/setting_page';

class NavigationContent extends Component {

  render() {

    let { tab } = this.props;

    let page;
    switch (tab) {
      case 'bus':
        page = <BusPage />;
        break;
      case 'file':
        page = <FilePage />;
        break;
      case 'map':
        page = <MapPage />;
        break;
      case 'news':
        page = <NewsPage />;
        break;
      case 'setting':
      default:
        page = <SettingPage />
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={this.props.title}/>

        { page }

        <TabViewContainer />
      </View>
    );
  }

}

NavigationContent.propTypes = {
  title: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

export default NavigationContent;