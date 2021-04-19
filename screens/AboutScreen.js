import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image,
  ScrollView, TouchableOpacity, Dimensions, Share } from 'react-native';
  import Ratings from '../API/Ratings';
import { Feather, Entypo } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Comments from '../card/Comments';
import ListComment from '../card/listComment';
// import item from './TempatWisata';

const {height} = Dimensions.get('window')

const AboutScreen = ({navigation}) =>{
  const goToMainMenu = () =>{
    navigation.navigate('MainMenu');
  }
  //SHARING TO OTHER SOCIAL MEDIA
  
        const onShare = async () => {
          try {
            const result = await Share.share({

              message: navigation.getParam('link_360'),
              
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
        };
    return (
      <View style={styles.container}>
        
    
     
        <View style={{height:410,top:30}}>
          <WebView
            source={{ uri: navigation.getParam('link_360')}}
          />
        </View>  
        <TouchableOpacity onPress={goToMainMenu}
        style={{position: 'absolute', left:320, top:420,
          backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation:5, width:70}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>    
      <ScrollView style={styles.description}>
        <Text style={{padding:14, paddingTop:10,fontSize: 26, fontWeight:'bold', left:-5}}>{navigation.getParam('site_name')}
          <TouchableOpacity onPress={onShare}
            style={{left: 220, top: -80}}>
            <Entypo name='share' size={40} color='#ff6200'/>
        </TouchableOpacity>
        </Text>
        
          <View>
          <Ratings/>
             <Comments/>
            
            {/* <ListComment/> */}
          </View>
      </ScrollView>
      
        
      
      </View>
      );
    }
    export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  rating:{
    paddingTop:-40,
    left:-135,
},
  aboutbtn: {
    position: 'absolute',
    left:320,
    top: 390,
    padding:16,
    borderRadius:30,
    backgroundColor:'#ff6200',
    elevation:5,
  },
  description:{
    flex:2,
    width: 415,
    marginTop:30,
    backgroundColor: '#E8E8E8',
  },
});
