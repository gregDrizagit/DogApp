

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList, 
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import DogViewScreen from './components/DogViewScreen';
import SaveDogScreen from './components/SaveDogScreen';
import DogProfileScreen from './components/DogProfileScreen';
//import all of the screens for react-navigation stack 


import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(rootReducer)
//import all of the redux stuff
//create redux store 
export default class App extends Component {

  render() {
    return (
      //createStackNavigator takes an object where the keys are the name of the screen that
      //we reference when we want to move to a new screen using this.props.navigation.navigate('ScreenName')

      //We wrap the entire navigation stack with the redux provider so we can provide our redux state 
      //to all of our components 
        <Provider store={store}>
           <NavigationStack />
         </Provider>

    );
  }
}


const NavigationStack = createStackNavigator({
    Home: HomeScreen,
    DogView: DogViewScreen,
    SaveDog: SaveDogScreen,
    DogProfile: DogProfileScreen
  },
  {
  initialRouteName: 'Home',//sets the screen we start on
});

