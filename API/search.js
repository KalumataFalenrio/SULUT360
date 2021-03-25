import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,ActivityIndicator,
} from "react-native";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:null,
        }
    }
    componentDidMount(){
        return fetch('http://api.mpdigital.id/kawanua360')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson.kawanua360,
            })
        })
    .catch((error)=>{
        console.log(eror)
    });
    }
    render() {
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }else{
        return (
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
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
});