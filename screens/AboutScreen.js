import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image,
  ScrollView, TouchableOpacity, Dimensions, Share } from 'react-native';

import { Feather, Entypo } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Comments from '../card/Comments';


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
        <View style={{height:530,top:30}}>
          <WebView
            source={{ uri: navigation.getParam('link_360')}}
          />
        </View>      
      <ScrollView style={styles.description}>
        <Text style={{padding:14, paddingTop:10,fontSize: 20, fontWeight:'bold',}}>{navigation.getParam('site_name')}
        <Entypo style={{left:10,top:-43}}
          name="location-pin" size={35} color='#ff6200'/>
        </Text>
        
        
        <TouchableOpacity onPress={onShare}
            style={{left: 340, top: -45}}>
            <Entypo name='share' size={35} color='#ff6200'/>
        </TouchableOpacity>

          {/* <Text style={{top:-30,paddingHorizontal: 14, fontSize:17 ,fontWeight: 'normal', justifyContent:'flex-start'
        ,textAlign:'justify' ,lineHeight:19 ,opacity:0.5}}>
          {navigation.getParam('description')}
          </Text> */}
          <View>
            <Comments/>
          </View>
      </ScrollView>

        <TouchableOpacity onPress={goToMainMenu}
        style={{position: 'absolute', left:5, top:90,
          backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>
      
      </View>
      );
    }
    export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
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
