import React, { Component } from 'react';
import { SafeAreaView ,View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import SocialButton from '../screens/SocialButton';
// import loginWithFacebook from '../Component/loginwWithFacebook'

const LoginScreen = ({navigation}) =>{

      const goTomainmenu = () =>{
        navigation.navigate('mainmenu');
      }
    
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
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#FFFFFF"
            backgroundColor="#3488D6"
            // onPress={goToFacebook}
          />

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




