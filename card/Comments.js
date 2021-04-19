import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,Alert
} from "react-native";
import InputData from './InputData';
import FIREBASE from '../config/FIREBASE'
import ListComment from "../card/listComment";
// import { AirbnbRating } from 'react-native-ratings';


if(!FIREBASE.apps.length){
    FIREBASE.initializeApp(firebaseConfig);
}

export default class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:'',
            isLoading:true
        };
    }

    onChangeText = (stateName, value) =>{
        this.setState({
            [stateName] : value
        })
    }

    onSubmit = () =>{
        if(this.state.comment){
            const Allcomment = FIREBASE.database().ref('Comments')
            const Comments={
                comment:this.state.comment
            }
            Allcomment
            .push(Comments)
            .then((data)=>{
                Alert.alert('Thankyou','we appreciate your participation');
            })
            .catch((error) =>{
                console.log("Error : ",error)
            })
        }else{
            Alert.alert('Error','enter the message first');
        }
       
    };

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={{left:10,fontWeight:"bold",fontSize:20,}}>Comments</Text>
             <InputData 
                placeholder="what's your feedback?"
                onChangeText={this.onChangeText} value={this.state.comment}
                stateName="comment" />
                 
         <TouchableOpacity style={styles.tombol}
         onPress={()=>this.onSubmit()}>
             <Text style={styles.textTombol}>SUBMIT</Text>
             </TouchableOpacity> 
            <View>
            <ListComment/>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    tombol: {
        top:-70,
        left:130,
        backgroundColor: '#ff6200',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal:150,
        borderRadius:10,
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
      },
});