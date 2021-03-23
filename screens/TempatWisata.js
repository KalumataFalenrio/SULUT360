import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const TempatWisata = ({navigation}) =>{

    const goToTempatWisata = () =>{
      navigation.navigate('about');
    }
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={goToTempatWisata}>
          <Text style={{top:30, fontWeight: 'bold', fontSize: 18}}>skip</Text>
        </TouchableOpacity>
            </View>
        );

}
export default TempatWisata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});