// import React,{Component} from 'react';
// import { FlatList, ActivityIndicator, Text, View,StyleSheet,
//     Dimensions, TouchableOpacity, TextInput, Image, Linking} from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import Button from './Button';

// const {width,height} = Dimensions.get('window')



// class TampilanUdara extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true };
//   }

//   componentDidMount() {
//     return fetch('http://api.mpdigital.id/kawanua360')
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson
//           },
//           function() {
//           }
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
 

//   render() {
//     const cekCategory =(item)=>{
//       if(item.category == "Budaya"){
//         return(
//           <View style={styles.cardView}>
//                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('about',item)}>
//                   <Text style={styles.sitename}>{item.site_name}</Text>
//                   </TouchableOpacity>
//                   <Image style={styles.image} source={item.thumbnail ? {uri: item.thumbnail } : null}/>

//               <Button
//                   buttonTitle="View 360"
//                   btnType="360"
//                   color="#FFFFFF"
//                   backgroundColor="#ff6200"
//                   onPress={()=>Linking.openURL(item.link_360)}
//                 />
//               </View>
//         )
//       }
//     }
    
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.loading}>
//           <ActivityIndicator size="large" color="#ff6200" />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//           <TextInput
//             placeholder='search your destination'
//             placeholderTextColor='#585757'
//             style={{top:20,
//                 left : 85,
//                 marginTop: 16,
//                 backgroundColor:'#000000',
//                 paddingLeft: 24,
//                 padding : 12,
//                 borderTopLeftRadius : 30,
//                 borderBottomLeftRadius : 30,
//                 width: '80%',
//                 elevation: 5,}}
//             />
        
//             <Feather name='search' size={25} color='#585757'  style={
//                 {position:'absolute', top:50, left:380, elevation:5,}}
//                 />
//         <FlatList 
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             cekCategory(item)
//            )
//           }
//           // keyExtractor={(item, category) => 'key' + category}
//           keyExtractor={({id}) => id }
//         />
//         <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainMenu')}
//         style={{position: 'absolute', left:20, top:40,
//           backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation:5}}>
//         <Feather name="arrow-left" size={24} color='#fff'/>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//       },
//     loading: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     cardView: {
//       top:30,
//       backgroundColor: 'grey',
//       margin: width * 0.03,
//       borderRadius: width * 0.05,
//       shadowColor: '#000',
//       shadowOffset: { width:0.5, height: 0.5 },
//       shadowOpacity: 0.5,
//       shadowRadius: 3
//   },
//   sitename:{
//       top:-20,
//       width:width,
//       margin:width*0.1,
//       color:'black',
//       fontSize:20,
//       fontWeight:'bold'
//   },
//   image:{
//     top:-50,
//     height: 190,
//     marginLeft:20,
//     marginRight:20,
//     },
//     link_360:{
//         top: -20,
//         marginBottom: width * 0.0,
//         marginHorizontal: width * 0.02,
//         fontSize: 15,
//         color: 'black'
//     },
// });


// export default TampilanUdara;


// // import React, { useEffect,useState } from "react";
// // import { 
// //     View,
// //     Text,
// //     StyleSheet,
// //     Button,
// //     TouchableOpacity,
// // } from "react-native";
// // import { Feather } from '@expo/vector-icons';

// // //IMPORT CARD DAN API
// // import DaratAPI from '../API/DaratAPI';

// // const TampilanDarat  =({navigation}) =>{
// //     const goToMainMenu = () =>{
// //         navigation.navigate('MainMenu');

// //     }
// //     return(
// //         <View>
// //             <TouchableOpacity onPress={goToMainMenu}
// //         style={{position: 'absolute', left:20, top:40,
// //           backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
// //         <Feather name="arrow-left" size={24} color='#fff'/>
// //         </TouchableOpacity>
// //         <DaratAPI></DaratAPI>
// //         </View>
// //     )
// // }
// // export default TampilanDarat;
