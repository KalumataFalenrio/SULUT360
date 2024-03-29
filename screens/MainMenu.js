import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, 
    ScrollView, TouchableOpacity, Dimensions,} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

const MainMenu = ({navigation}) =>{
    
    const goTotempatwisata = () =>{
        navigation.navigate('tempatwisata');
      }
      const goTomenu = () =>{
        navigation.navigate('menu');
      }
      const goTotampilandarat = () =>{
          navigation.navigate('tampilandarat')
      }
      const goTotampilanudara = () =>{
          navigation.navigate('tampilanudara')
      }
      const goToolahragadive = () =>{
          navigation.navigate('olahragadive')
      }
    //   const goToBudaya = () =>{
    //     navigation.navigate('Budaya')
    // }
    
        return (
            <View style={styles.container}>
                <ImageBackground
            source={{uri:'https://mpdigital.id/wp-content/uploads/2020/08/bunakenAerial.jpg'}}
            style={styles.loginImage}>
                </ImageBackground>
                    {/* <TouchableOpacity onPress={goTomenu}
                    style={{position: 'absolute', left:20, top:40,
                        backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation: 5,}}>
                    <Entypo name="menu" size={25} color='#fff'/>
                    </TouchableOpacity> */}
                <View> 
                </View>
                
                
                <ScrollView style={styles.description}>
                   <View>
                       
                        <TouchableOpacity onPress={goTotampilandarat}
                        style={styles.tampilandarat}>
                            <Image
                                source={require('../assets/images/tampilanDarat.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                            <Text style={{top:-140, paddingLeft:15, fontWeight:'bold', color:'#1D9885'}}>tampilan darat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={goTotampilanudara}
                        style={styles.tampilanudara}>
                            <Image
                                source={require('../assets/images/tampilanUdara.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:15, fontWeight:'bold', color:'#7C0A94'}}>tampilan udara</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={goToolahragadive}
                        style={styles.Dive}>
                            <Image
                                source={require('../assets/images/Dive.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:12, fontWeight:'bold', color:'#1D9885'}}>Olahraga & dive </Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={goToBudaya}
                        style={styles.Budaya}>
                            <Image
                                source={require('../assets/images/Budaya.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:12, fontWeight:'bold', color:'#1D9885'}}>Olahraga & dive </Text>
                        </TouchableOpacity> */}
                    
                    </View> 
                    <TouchableOpacity onPress={goTotempatwisata}
                            style={styles.tampilkanbtn}>
                            <Text style={{fontWeight : "bold" ,color:'#fff', paddingLeft:5}}>Tampilkan Semua</Text>
                        </TouchableOpacity>  
                </ScrollView>
            </View>
        );
    }
export default MainMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginImage: {
        height:height*0.4,
        width:420,
    },
    description:{
        flex:1,
        width: 415,
        backgroundColor: '#E8E8E8',
        marginTop:-30,
        borderRadius:30,
    },
    tampilandarat:{
        top: 40,
        left:55,
        height: 170,
        width:130,
        borderRadius:30,
        backgroundColor:'#E9FEDC',
        elevation:5,
    },
    tampilanudara:{
        top: -130,
        left:230,
        height: 170,
        width:130,
        borderRadius:30,
        backgroundColor:'#FDDCFE',
        elevation:5,
    },
    Dive:{
        top: -100,
        left:140,
        height: 170,
        width:130,
        borderRadius:30,
        backgroundColor:'#F5FFB4',
        elevation:5,
    },
    Budaya:{
        top: -270,
        left:230,
        height: 170,
        width:130,
        borderRadius:30,
        backgroundColor:'#FFEBCF',  
        elevation:5,
    },
    tampilkanbtn: {
        
        left:125,
        top: -70,
        padding:16,
        borderRadius:30,
        backgroundColor:'#ff6200',
        width: '40%',
        elevation:5,
    },
});