/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text,Button,Alert } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import DetailsScreen from './Componts/Home'


class HomeScreen extends React.Component {
  static navigationOptions = {  
    title: 'Home',//在导航中显示的标题内容
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// class DetailsScreen extends React.Component {

//   static navigationOptions = {  
//       title: 'Detail',//在导航中显示的标题内容
//       };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName:'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
