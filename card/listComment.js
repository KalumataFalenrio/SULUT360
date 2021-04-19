import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import FIREBASE from '../config/FIREBASE';
import CardComments from './cardComments'

const {width} = Dimensions.get('window')


class ListComment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          commenting: {},
          commentingKey: [],
        };
      }

      componentDidMount(){
        FIREBASE.database()
        .ref("Comments")
        .once('value',(querySnapShot) =>{

            let data = querySnapShot.val() ? querySnapShot.val() : {}
            let commentItem =  {...data};

            this.setState({
                commenting: commentItem,
                commentingKey: Object.keys(commentItem)
            })
        })
    }
    
    render() {
        // console.log("kontaks : ",this.state.commenting);
        // console.log("kontaks key : ",this.state.commentingKey);
        const { commenting, commentingKey } = this.state
        return (
            <View style={styles.cardView}>
                {commentingKey.length > 0 ? (
                    commentingKey.map((key) => (
                        <CardComments key={key} commentItem={commenting[key]} id={key}/>
                    ))
                ) : (
                    <Text></Text>
                )}
         </View>
        );
    }
}
export default ListComment;

const styles = StyleSheet.create({
});