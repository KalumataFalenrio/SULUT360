import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image,
  ScrollView, TouchableOpacity, Dimensions, Share } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Feather, Entypo } from '@expo/vector-icons';
import Comments from '../card/Comments';


const {height} = Dimensions.get('window')

const AboutScreen = ({navigation}) =>{
  const goToTampilanDarat = () =>{
    navigation.navigate('tampilandarat');
  }
  //SHARING TO OTHER SOCIAL MEDIA
  
        const onShare = async () => {
          try {
            const result = await Share.share({
              message: 'https://kawanua360.com/',
     
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
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
        
          <Image 
              style={styles.loginImage}
              source={require('../assets/images/Kawanua360spot1.png')}/>
      
        <ScrollView style={styles.description}>
        <Text style={{padding:14, paddingTop:20,fontSize: 20, fontWeight:'bold',}}>{navigation.getParam('site_name')}
        <Entypo style={{left:10,top:-43}}
          name="location-pin" size={24} color='#ff6200'/>
        </Text>
        
        <View style={styles.rating}>
            <AirbnbRating
                count={5}
                reviews={["Bad","Good", "Very Good", "Wow", "Amazing"]}
                defaultRating={5}
                size={20}
                showRating={false}
                />
                </View>

          <Text style={{top:20,paddingHorizontal: 14, fontSize:17 ,fontWeight: 'normal', justifyContent:'flex-start'
        ,textAlign:'justify' ,lineHeight:19 ,opacity:0.5}}>
          Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan bagian dari kota Manado, ibu kota provinsi Sulawesi Utara, Indonesia. Pulau Bunaken dapat di tempuh dengan kapal cepat (speed boat) atau kapal sewaan dengan perjalanan sekitar 30 menit dari pelabuhan kota Manado. Di sekitar pulau Bunaken terdapat taman laut Bunaken yang merupakan bagian dari Taman Nasional Bunaken. Taman laut ini memiliki biodiversitas kelautan salah satu yang tertinggi di dunia. Selam scuba menarik banyak pengunjung ke pulau ini. Secara keseluruhan taman laut Bunaken meliputi area seluas 75.265 hektare dengan lima pulau yang berada di dalamnya, yakni Pulau Manado Tua (Manarauw), Pulau Bunaken, Pulau Siladen, Pulau Mantehage berikut beberapa anak pulaunya, dan Pulau Naen. Meskipun meliputi area 75.265 hektare, lokasi penyelaman (diving) hanya terbatas di masing-masing pantai yang mengelilingi kelima pulau itu.
Taman laut Bunaken memiliki 20 titik penyelaman (dive spot) dengan kedalaman bervariasi hingga 1.344 meter. Dari 20 titik selam itu, 12 titik selam di antaranya berada di sekitar Pulau Bunaken. Dua belas titik penyelaman inilah yang paling kerap dikunjungi penyelam dan pecinta keindahan pemandangan bawah laut.
Sebagian besar dari 12 titik penyelaman di Pulau Bunaken berjajar dari bagian tenggara hingga bagian barat laut pulau tersebut. Di wilayah inilah terdapat underwater great walls, yang disebut juga hanging walls, atau dinding-dinding karang raksasa yang berdiri vertikal dan melengkung ke atas. Dinding karang ini juga menjadi sumber makanan bagi ikan-ikan di perairan sekitar Pulau Bunaken.
Sayang sekali akibat nama besarnya, banyak orang Indonesia yang bahkan tidak pernah menginjakkan kakinya di Tanah Lumimuut, merasa telah mengenal dan tahu tentang Bunaken, bicara tentang Taman Nasional Bunaken, berarti berbicara tentang International Heritage and a miracle of Bunaken. Banyak peneliti dari luar negeri sangat menyayangkan kesalahan informasi dari Indonesia. Bunaken lebih daripada sekadar tahu dalam buku, Bunaken adalah pengalaman menyelam.
          {/* {navigation.getParam('description')} */}
          </Text>

          <TouchableOpacity onPress={onShare}
          style={{left: 340, top: 10}}>
            <Entypo name='share' size={45} color='#ff6200'/>
          </TouchableOpacity>

          <View>
            <Comments/>
          </View>
        </ScrollView>

        <TouchableOpacity onPress={goToTampilanDarat}
        style={{position: 'absolute', left:20, top:40,
          backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aboutbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>About</Text>
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
    left:320,
    top: 370,
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
  rating:{
    paddingTop:-40,
    left:-135,
    },
});
