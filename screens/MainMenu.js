import React, { Component, useState } from "react";
import { View, Text, StyleSheet, 
    Button, Image, ImageBackground, 
    ScrollView, TouchableOpacity, FlatList, Dimensions, TextInput } from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

const MainMenu = ({navigation}) =>{
    const goTotempatwisata = () =>{
        navigation.navigate('tempatwisata');
      }
        return (
            <View style={styles.container}>
                <ImageBackground
            source={require('../assets/images/Kawanua360spot1.png')}
            style={styles.loginImage}>
                    <TouchableOpacity style={{position: 'absolute', left:20, top:40,
                        backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation: 5,}}>
                    <Entypo name="menu" size={25} color='#fff'/>
                    </TouchableOpacity>
                <View> 
                    <TextInput
                    style={styles.searchbox}
                    placeholder='search your destination'
                    placeholderTextColor='#585757'>
                    </TextInput>
                    <Feather name='search' size={25} color='#585757'  style={
                        {position:'absolute', top:270, left:380, elevation:5,}
                    }/>
                </View>
                </ImageBackground>
                
                <ScrollView style={styles.description}>
                   <View>
                       
                        <TouchableOpacity style={styles.tampilandarat}>
                            <Image
                                source={require('../assets/images/tampilanDarat.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                            <Text style={{top:-140, paddingLeft:15, fontWeight:'bold', color:'#1D9885'}}>tampilan darat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tampilanudara}>
                            <Image
                                source={require('../assets/images/tampilanUdara.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:15, fontWeight:'bold', color:'#7C0A94'}}>tampilan udara</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Dive}>
                            <Image
                                source={require('../assets/images/Dive.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:12, fontWeight:'bold', color:'#1D9885'}}>Olahraga & dive </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Budaya}>
                            <Image
                                source={require('../assets/images/Budaya.png')}
                                style={{top:-60, left:-55,resizeMode:'center'}}
                            />
                             <Text style={{top:-140, paddingLeft:37, fontWeight:'bold', color:'#583B13'}}>Budaya</Text>
                        </TouchableOpacity>


                    
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
    searchbox: {
        top:240,
        left : 80,
        marginTop: 16,
        backgroundColor:'#FFFFFF',
        paddingLeft: 24,
        padding : 12,
        borderTopLeftRadius : 30,
        borderBottomLeftRadius : 30,
        width: '80%',
        elevation: 5,
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
        left:55,
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
        top: -240,
        padding:16,
        borderRadius:30,
        backgroundColor:'#ff6200',
        width: '40%',
        elevation:5,
    },
});