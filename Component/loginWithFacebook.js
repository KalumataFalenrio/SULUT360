import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as Facebook from "expo-facebook";

export default function App() {
  const [user, setUser] = useState(null);

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("133973795314616");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
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
      {user ? (
        <View style={styles.fotoContainer}>
          <Image style={styles.image} source={{ uri: user.picture.data.url }} />
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
      ) : (
        <Button title="Login" onPress={signUpFacebook} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
});


// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import * as firebase from 'firebase';

// // Initialize Firebase
// const firebaseConfig = {
//   // ADD YOUR FIREBASE CREDENTIALS
//   apiKey: "AIzaSyB9EcTrFtywaP17MaoHNzUP0Ep0WWQyOzc",
//   authDomain: "sulut-8af84.firebaseapp.com",
//   projectId: "sulut-8af84",
//   storageBucket: "sulut-8af84.appspot.com",
//   messagingSenderId: "241992910621",
//   appId: "1:241992910621:web:b6e1b10f6d9f8889ca43f4",
//   measurementId: "G-9S70ZVNL70"
// };

// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }


// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'react-native'

// class loginWithFacebook extends Component {

//   constructor(props) {
//     super(props)

//     this.state = ({
//       email: '',
//       password: ''
//     })
//   }

//   componentDidMount() {

//     firebase.auth().onAuthStateChanged((user) => {
//       if (user != null) {
//         console.log(user)
//       }
//     })
//   }

//   signUpUser = (email, password) => {

//     try {

//       if (this.state.password.length < 6) {
//         alert("Please enter atleast 6 characters")
//         return;
//       }

//       firebase.auth().createUserWithEmailAndPassword(email, password)
//     }
//     catch (error) {
//       console.log(error.toString())
//     }
//   }

//   loginUser = (email, password) => {

//     try {

//       firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
//         console.log(user)

//       })
//     }
//     catch (error) {
//       console.log(error.toString())
//     }
//   }

//   async loginWithFacebook() {

//     //ENTER YOUR APP ID 
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('133973795314616', { permissions: ['public_profile'] })

//     if (type == 'success') {

//       const credential = firebase.auth.FacebookAuthProvider.credential(token)

//       firebase.auth().signInWithCredential(credential).catch((error) => {
//         console.log(error)
//       })
//     }
//   }

//   render() {
//     return (
//       <Container style={styles.container}>
//         <Form>
//           <Item floatingLabel>
//             <Label>Email</Label>
//             <Input
//               autoCorrect={false}
//               autoCapitalize="none"
//               onChangeText={(email) => this.setState({ email })}
//             />

//           </Item>

//           <Item floatingLabel>
//             <Label>Password</Label>
//             <Input
//               secureTextEntry={true}
//               autoCorrect={false}
//               autoCapitalize="none"
//               onChangeText={(password) => this.setState({ password })}
//             />
//           </Item>

//           <Button style={{ marginTop: 10 }}
//             full
//             rounded
//             success
//             onPress={() => this.loginUser(this.state.email, this.state.password)}
//           >
//             <Text style={{ color: 'white' }}> Login</Text>
//           </Button>

//           <Button style={{ marginTop: 10 }}
//             full
//             rounded
//             primary
//             onPress={() => this.signUpUser(this.state.email, this.state.password)}
//           >
//             <Text style={{ color: 'white' }}> Sign Up</Text>
//           </Button>

//           <Button style={{ marginTop: 10 }}
//             full
//             rounded
//             primary
//             onPress={() => this.loginWithFacebook()}
//           >
//             <Text style={{ color: 'white' }}> Login With Facebook</Text>
//           </Button>



//         </Form>
//       </Container>
//     );
//   }
// }
// export default loginWithFacebook;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     padding: 10
//   },
// });