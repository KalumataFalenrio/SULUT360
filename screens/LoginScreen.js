import React, { Component, useState } from 'react';
import { SafeAreaView ,View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import SocialButton from '../screens/SocialButton';
import * as Facebook from "expo-facebook";
import * as firebase from 'firebase';

const LoginScreen = () =>{
      
      const goTomainmenu = () =>{
        navigation.navigate('mainmenu');
      }

  //Initialize Firebase
    const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyB9EcTrFtywaP17MaoHNzUP0Ep0WWQyOzc",
  authDomain: "sulut-8af84.firebaseapp.com",
  projectId: "sulut-8af84",
  storageBucket: "sulut-8af84.appspot.com",
  messagingSenderId: "241992910621",
  appId: "1:241992910621:web:b6e1b10f6d9f8889ca43f4",
  measurementId: "G-9S70ZVNL70"
};

      if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}//133973795314616

      const [user, setUser] = useState(null);

      signUpFacebook = async () => {
        try {
          await Facebook.initializeAsync({
            appId: '133973795314616',
          })
          const {
            type,
            token,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          })
          if (type === "success") {
            const credential = firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInWithCredential(credential)
            .catch(error =>{
              console.log(error)
            })
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
              `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
            );
            // console.log((await response.json()).name);
            const data = await response.json();
            setUser(data);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      };
      
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text_header}>WELCOME TO</Text>
          <Text style={styles.text_header}>SULUT360</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.titlesWrapper}>
              <Text style={{fontWeight: "bold",fontSize : 28 }}>SIGN IN</Text>
          </View>
          {user ? (
        <View style={styles.fotoContainer}>
          {/* <Image style={styles.image} source={{ uri: user.picture.data.url }} />
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text> */}
        </View> 
      ) :
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#FFFFFF"
            backgroundColor="#3488D6"
            onPress={() =>this.signUpFacebook()}
          />}

        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#FFFFFF"
            backgroundColor="#FF6838"
          // onPress={() => this.signInWithGoogleAsync()}
        /> 

        <TouchableOpacity onPress={goTomainmenu}>
          <Text style={{top:30, left:170, fontWeight: 'bold', fontSize: 18}}>skip</Text>
        </TouchableOpacity>
          </View>
      </View>
    );
}
  
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5F3F3'
  },
  header: {
      flex: 2,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 20,
      backgroundColor: '#FF6200',
  },
  footer: {
      flex: 1,
      top: -20,
      backgroundColor: '#F5F3F3',
      width: 412,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
    titlesWrapper:{
    marginTop : 5,
    paddingHorizontal : 130,
},

});




