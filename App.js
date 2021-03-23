import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
// import Header from './Component/Header';
// import * as GoogleSignIn from 'expo-google-sign-in';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

//FIREBAS
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

//IMPORT SEMUA SCREEN
import LoginScreen from './screens/LoginScreen';
import MainMenu from './screens/MainMenu';
import LoadingScreen from './screens/LoadingScreen';
import TempatWisata from './screens/TempatWisata';
import informationScreen from './screens/informationScreen';
import AboutScreen from './screens/AboutScreen';
import feedbacksScreen from './screens/feedbacksScreen';
import search from './API/search'


export default class App extends React.Component{
  render(){
    return <AppNavigator/>;
  }
}

// const myApp = createDrawerNavigator({
//   Home:{
//    screen:menu
//   },
// })

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  MainMenu:MainMenu,
  tempatwisata:TempatWisata,
  information:informationScreen,
  about:AboutScreen,
  feedbacks:feedbacksScreen,
  search:search,

});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

