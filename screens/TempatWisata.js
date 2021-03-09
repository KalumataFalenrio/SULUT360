import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TempatWisata extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TempatWisata</Text>
            </View>
        );
    }
}
export default TempatWisata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});