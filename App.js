import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Read from './screens/Read';
import Write from './screens/Write';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Write: { screen: Write },
    Read: { screen: Read },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Write') {
          return (
            <Image
              style={{ width: 50, height: 30, borderRadius: 100 }}
              source={require("./assets/write.png")}
            />
          );
        } else if (routeName === 'Read') {
          return (
            <Image
              style={{ width: 50, height: 30, borderRadius: 100 }}
              source={require('./assets/read.png')}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);
