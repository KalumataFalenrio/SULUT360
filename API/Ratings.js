import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text,TouchableOpacity, Image, View} from 'react-native'
// import { View } from 'react-native-animatable';


const Ratings =()=>{
    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const CustomRatingBar = () =>{
        return(
            <View style={styles.CustomRatingBarStyle}>
                 {
                     maxRating.map((item, key) =>{
                         return(
                             <TouchableOpacity
                             activeOpacity={0.7}
                             key={item}
                             onPress={() => setDefaultRating(item)}
                             >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                ? {uri : starImgFilled}
                                : {uri : starImgCorner}
                            }
                            />
                             </TouchableOpacity>
                         )
                     })
                 }
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
    
        <CustomRatingBar />
        <Text style={styles.TextStyle}>
        {defaultRating + '/' + maxRating.length}
        </Text>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnStyle}
        onPress={() => alert(defaultRating)}
        >
            <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    TextStyle:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
    CustomRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10
    },
    starImgStyle:{
       
        width:30,
        height:30,
        resizeMode:'cover'
    },
    btnStyle:{
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
export default Ratings;

// import React, { useState } from "react";
// import { 
//   View,
//   Text,
//   StyleSheet
// } from "react-native";
// import { FaStar } from "react-icons/fa";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
    
// };



// const Ratings = ({}) => {
//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   const stars = Array(5).fill(0)

//   const handleClick = value => {
//     setCurrentValue(value)
//   }

//   const handleMouseOver = newHoverValue => {
//     setHoverValue(newHoverValue)
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined)
//   }


//   return (
//     <View style={styles.container}>
//       <Text> React Ratings </Text>
//       <View style={styles.stars}>
//         {stars.map((_, index) => {
//           return (
//             <FaStar
//               key={index}
//               size={24}
//               onClick={() => handleClick(index + 1)}
//               onMouseOver={() => handleMouseOver(index + 1)}
//               onMouseLeave={handleMouseLeave}
//               color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
//               style={{
//                 marginRight: 10,
//                 cursor: "pointer"
//               }}
//             />
//           )
//         })}
//       </View>
//       <textarTeea
//         placeholder="What's your experience?"
//         style={styles.textarea}
//       /> 

//       <button
//         style={styles.button}
//       >
//         <Text>
//         Submit
//         </Text>
        
//       </button> 
      
//     </View>
//   );
// };

// export default Ratings;
// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   stars: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   // textarea: {
//   //   border: "1px solid #a9a9a9",
//   //   borderRadius: 5,
//   //   padding: 10,
//   //   margin: "20px 0",
//   //   minHeight: 100,
//   //   width: 300
//   // },
//   // button: {
//   //   border: "1px solid #a9a9a9",
//   //   borderRadius: 5,
//   //   width: 300,
//   //   padding: 10,
//   // }

// });
