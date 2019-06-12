import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { purple, white } from './utils/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

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

const MainNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'AddDeck'
    }
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'DeckList'
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'DeckView'
    }
  },

}, {
    defaultNavigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View >
      </Provider>
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
