import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    backgroundColor
} from "react-native";

const CardComments = ({id, commentItem}) => {
   return(
    <View style={styles.cardComments}>
        <Text style={styles.textComment}>{commentItem.comment}</Text>
    </View>
    )
 }
export default CardComments;

const styles = StyleSheet.create({
    cardComments:{
        flexDirection: 'row',
        padding: 15,
        backgroundColor:'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation: 5,
    },
    textComment:{
        fontWeight:'bold',
        fontSize:16,
    }
})