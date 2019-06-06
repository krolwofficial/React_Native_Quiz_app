import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { purple, white } from './utilis/colors'

const Tabs = createAppContainer(createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="file-o" color={tintColor} size={25} />
      }
    }, AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" color={tintColor} size={25} />
      }
    }
  }, {
    initialRouteName: 'DeckList',
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white,
      }
    }
  }
));

const MainNavigator = createStackNavigator({
  Home: { screen: Tabs },
  AddDeck: { screen: AddDeck },
  DeckList: { screen: DeckList }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
