import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import Header from './Component/Header';
import * as GoogleSignIn from 'expo-google-sign-in';

//NAVIGATION
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//IMPORT SEMUA SCREEN
import login from './screens/LoginScreen';
import loading from './screens/LoadingScreen';
import mainmenu from './screens/MainMenu';
import tempatwisata from './screens/TempatWisata';
import information from './screens/informationScreen';
import about from './screens/AboutScreen';
import feedbacks from './screens/feedbacksScreen';

//FIREBAS
// import * as firebase from 'firebase';
// import { firebaseConfig } from './config';
// firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRoute="login"
        screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="login" component={login}/>
          <Stack.Screen name="loading" component={loading}/>
          <Stack.Screen name="about" component={about}/>
          <Stack.Screen name="mainmenu" component={mainmenu}/>
          <Stack.Screen name="tempatwisata" component={tempatwisata}/>
          <Stack.Screen name="information" component={information}/>
          <Stack.Screen name="feedbacks" component={feedbacks}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
