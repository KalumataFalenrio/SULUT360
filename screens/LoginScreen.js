import React, { Component } from 'react';
import { SafeAreaView ,View, Text, StyleSheet, Button, Image } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';
import SocialButton from '../screens/SocialButton';

class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '',//YOUR_CLIENT_ID_HERE',
        behavior: 'web',
        // iosClientId: '', //enter ios client id
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
            // onPress={() => fbLogin()}
          />

        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#FFFFFF"
            backgroundColor="#FF6838"
          onPress={() => this.signInWithGoogleAsync()}
        /> 
          </View>
      </View>
      // <View style={styles.container}>
      //   <SafeAreaView>
      //           <View styles={styles.headerWrapper}>
      //               <Image
      //                source={require('../assets/images/beach.png')}
      //                style={styles.loginImage}/>
      //           </View>
      //       </SafeAreaView>
      //       <View style={styles.titlesWrapper}>
      //               <Text style={{fontWeight: "bold",fontSize : 24 }}>SIGN IN</Text>
      //           </View>
              
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 4,
      backgroundColor: '#F5F3F3',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  // text_footer: {
  //     color: '#05375a',
  //     fontSize: 18
  // },
    titlesWrapper:{
    marginTop : 40,
    paddingHorizontal : 130,
},
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loginImage: {
//     width : 415,
//     height: 250,
//     paddingTop: 20,
//   },
//   titlesWrapper:{
//     marginTop : 60,
//     paddingHorizontal : 150,
// },
// });
