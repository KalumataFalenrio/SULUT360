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

          <Text style={{top:-30,paddingHorizontal: 14, fontSize:17 ,fontWeight: 'normal', justifyContent:'flex-start'
        ,textAlign:'justify' ,lineHeight:19 ,opacity:0.5}}>
          Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan bagian dari kota Manado, ibu kota provinsi Sulawesi Utara, Indonesia. Pulau Bunaken dapat di tempuh dengan kapal cepat (speed boat) atau kapal sewaan dengan perjalanan sekitar 30 menit dari pelabuhan kota Manado. Di sekitar pulau Bunaken terdapat taman laut Bunaken yang merupakan bagian dari Taman Nasional Bunaken. Taman laut ini memiliki biodiversitas kelautan salah satu yang tertinggi di dunia. Selam scuba menarik banyak pengunjung ke pulau ini. Secara keseluruhan taman laut Bunaken meliputi area seluas 75.265 hektare dengan lima pulau yang berada di dalamnya, yakni Pulau Manado Tua (Manarauw), Pulau Bunaken, Pulau Siladen, Pulau Mantehage berikut beberapa anak pulaunya, dan Pulau Naen. Meskipun meliputi area 75.265 hektare, lokasi penyelaman (diving) hanya terbatas di masing-masing pantai yang mengelilingi kelima pulau itu.
Taman laut Bunaken memiliki 20 titik penyelaman (dive spot) dengan kedalaman bervariasi hingga 1.344 meter. Dari 20 titik selam itu, 12 titik selam di antaranya berada di sekitar Pulau Bunaken. Dua belas titik penyelaman inilah yang paling kerap dikunjungi penyelam dan pecinta keindahan pemandangan bawah laut.
Sebagian besar dari 12 titik penyelaman di Pulau Bunaken berjajar dari bagian tenggara hingga bagian barat laut pulau tersebut. Di wilayah inilah terdapat underwater great walls, yang disebut juga hanging walls, atau dinding-dinding karang raksasa yang berdiri vertikal dan melengkung ke atas. Dinding karang ini juga menjadi sumber makanan bagi ikan-ikan di perairan sekitar Pulau Bunaken.
Sayang sekali akibat nama besarnya, banyak orang Indonesia yang bahkan tidak pernah menginjakkan kakinya di Tanah Lumimuut, merasa telah mengenal dan tahu tentang Bunaken, bicara tentang Taman Nasional Bunaken, berarti berbicara tentang International Heritage and a miracle of Bunaken. Banyak peneliti dari luar negeri sangat menyayangkan kesalahan informasi dari Indonesia. Bunaken lebih daripada sekadar tahu dalam buku, Bunaken adalah pengalaman menyelam.
          {/* {navigation.getParam('description')} */}
          </Text>
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
    backgroundColor: '#FFFFFF',
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
