import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, 
  Button, Image, ImageBackground, 
  ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


const height = Dimensions.get('window').height;

const AboutScreen = ({navigation}) =>{
// class AboutScreen extends Component {
    const goToinformation = () =>{
      navigation.navigate('information');
    }
    const goTofeedbacks = () =>{
      navigation.navigate('feedbacks');
    }
    const goToMainMenu = () =>{
      navigation.navigate('MainMenu');
    }
    return (
      <View style={styles.container}>
        <Image
            source={require('../assets/images/Kawanua360spot1.png')}
            style={styles.loginImage}/>
        {/* <Text>DashboardScreen</Text> */}
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> /> */}
        <ScrollView style={styles.description}>
        <Text style={{padding:14, paddingTop:30,fontSize: 20, fontWeight:'bold',}}>Hotel Best Western</Text>
          <Text style={{paddingHorizontal: 14, fontSize:17 ,fontWeight: 'normal', justifyContent:'flex-start'
        ,textAlign:'justify' ,lineHeight:19 ,opacity:0.5}}>
          Situated in a strategic location at Bahu Mall integrated area complete with shopping, 
          commercial, and entertainment facilities within easy access to Boulevard area (Manado's number 1 street)  
          while Sam Ratulangi International Airport is only 45 minutes drive. Best Western The Lagoon Hotel offers 
          perfect spots for great adventure ranging from scuba diving named Bunaken National Park as one of the best 
          Indonesia’s dive spot, volcano trekking tours, white water rafting, to The Tangkoko Nature Reserve. 
          For a more relaxing sunny day, visit Pall Beach or Pulisan Beach to enjoy the white sand and clear blue water.
          Situated in a strategic location at Bahu Mall integrated area complete with shopping, 
          commercial, and entertainment facilities within easy access to Boulevard area (Manado's number 1 street)  
          while Sam Ratulangi International Airport is only 45 minutes drive. Best Western The Lagoon Hotel offers 
          perfect spots for great adventure ranging from scuba diving named Bunaken National Park as one of the best 
          Indonesia’s dive spot, volcano trekking tours, white water rafting, to The Tangkoko Nature Reserve. 
          For a more relaxing sunny day, visit Pall Beach or Pulisan Beach to enjoy the white sand and clear blue water.
          </Text>
        </ScrollView>

        <TouchableOpacity onPress={goToMainMenu}
        style={{position: 'absolute', left:20, top:40,
          backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aboutbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToinformation}
        style={styles.informationbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>Information</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goTofeedbacks}
        style={styles.feedbackbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>feedbacks</Text>
        </TouchableOpacity>
      </View>
      );
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  loginImage: {
    height:height*0.5,
    width:420,
  },
  aboutbtn: {
    position: 'absolute',
    left:15,
    top: 375,
    padding:16,
    borderRadius:30,
    backgroundColor:'#ff6200',
    elevation:5,
  },
  informationbtn: {
    position: 'absolute',
    left:140,
    left:140,
    top: 375,
    padding:16,
    borderRadius:30,
    backgroundColor:'#ff6200',
    elevation:5,
  },
  feedbackbtn: {
    position: 'absolute',
    right:12,
    top: 375,
    padding:16,
    borderRadius:30,
    backgroundColor:'#ff6200',
    elevation:5,
  },
  description:{
    flex:1,
    width: 415,
    backgroundColor: '#E8E8E8',
    marginTop:-30,
    borderRadius:30,
  },
});
