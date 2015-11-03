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
import MapPageContainer from '../../../containers/map_page';
import NewsPageContainer from '../../../containers/news_page';
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
        page = <MapPageContainer />;
        break;
      case 'news':
        page = <NewsPageContainer />;
        break;
      case 'setting':
      default:
        page = <SettingPage />
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar {...this.props} />

        { page }

        <TabViewContainer />
      </View>
    );
  }

}

NavigationContent.propTypes = {
};

export default NavigationContent;