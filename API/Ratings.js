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
//       {/* <textarTeea
//         placeholder="What's your experience?"
//         style={styles.textarea}
//       /> */}

//       {/* <button
//         style={styles.button}
//       >
//         <Text>
//         Submit
//         </Text>
        
//       </button> */}
      
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
