'use strict';

var React = require('react-native');
var {
  Navigator,
} = React;

var NavigationContent = require('./navigation_content');

var NavigationBar = require('./navigation_bar');

var MainNavigator = React.createClass({
    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <NavigationContent
                        name={route.name}
                        onForward={() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                />
                }
             />
        );
    }
});

module.exports = MainNavigator;