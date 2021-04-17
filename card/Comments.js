import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,Alert
} from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import InputData from '../Component/InputData';
import FIREBASE from '../config/FIREBASE'
import ListComment from "../card/listComment";

if(!FIREBASE.apps.length){
    FIREBASE.initializeApp(firebaseConfig);
}

export default class Comments extends Component{
// class comments extends Component {
    constructor(props){
        super(props)

        this.state={
            comment:'',
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
            <View style={styles.rating}>
                <AirbnbRating
                    count={5}
                    reviews={["Bad","Good", "Very Good", "Wow", "Amazing"]}
                    defaultRating={5}
                    size={20}
                    showRating={false}
                    />
            </View>
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
    rating:{
        paddingTop:-40,
        left:-135,
    },
    inputComments: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 15,
        width: 30,
    },
    tombol: {
        top:-95,
        left:130,
        backgroundColor: '#ff6200',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal:150
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
      },
});