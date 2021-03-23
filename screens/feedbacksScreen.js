import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';

const height = Dimensions.get('window').height;

const feedbacksScreen = ({navigation}) =>{
    // class AboutScreen extends Component {
        const goToinformation = () =>{
            navigation.navigate('information');
        }
        const goToabout = () =>{
          navigation.navigate('about');
        }
        const goToMainMenu = () =>{
          navigation.navigate('MainMenu');
        }
        
        return (
            <View style={styles.container}>
                <Image
            source={require('../assets/images/Kawanua360spot1.png')}
            style={styles.loginImage}/>

            <ScrollView style={styles.description}>
                <View style={styles.rating}>
            <AirbnbRating
                count={5}
                reviews={["Bad","Good", "Very Good", "Wow", "Amazing"]}
                defaultRating={5}
                size={20}
                showRating={false}
                />
                </View>

                </ScrollView>
        <TouchableOpacity onPress={goToMainMenu}
        style={{position: 'absolute', left:20, top:40,
          backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToabout}
        style={styles.aboutbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToinformation}
        style={styles.informationbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>Information</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.feedbackbtn}>
          <Text style={{fontWeight : "bold" ,color:'#fff'}}>feedbacks</Text>
        </TouchableOpacity>
            </View>
        )
    }
export default feedbacksScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginImage: {
      height:height*0.5,
      width:430,
    },
    aboutbtn: {
      position: 'absolute',
      left:18,
      top: 375,
      padding:16,
      borderRadius:30,
      backgroundColor:'#ff6200',
      elevation:5,
    },
    informationbtn: {
      position: 'absolute',
      left:140,
      top: 375,
      padding:16,
      borderRadius:30,
      backgroundColor:'#ff6200',
      elevation:5,
    },
    feedbackbtn: {
      position: 'absolute',
      right:12,
      top: 375,
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
    paddingTop:45,
    left:120,
    },
});