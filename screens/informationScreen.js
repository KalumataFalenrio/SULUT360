// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     TouchableOpacity,
//     Dimensions,
//     ScrollView, Share
// } from "react-native";
// import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// const height = Dimensions.get('window').height;

// const informationScreen = ({navigation}) =>{
//     // class AboutScreen extends Component {
//         const goToabout = () =>{
//           navigation.navigate('about');
//         }
//         const goTofeedbacks = () =>{
//           navigation.navigate('feedbacks');
//         }
//         const goToMainMenu = () =>{
//           navigation.navigate('MainMenu');
//         }
//         const onShare = async () => {
//           try {
//             const result = await Share.share({
//               message: 'share',
//               // url : navigation.getParam('link_360'),
     
//             });
//             if (result.action === Share.sharedAction) {
//               if (result.activityType) {
//                 // shared with activity type of result.activityType
//               } else {
//                 // shared
//               }
//             } else if (result.action === Share.dismissedAction) {
//               // dismissed
//             }
//           } catch (error) {
//             alert(error.message);
//           }
//         };
        
//         return (
//             <View style={styles.container}>
//                 <Image
//             source={require('../assets/images/Kawanua360spot1.png')}
//             style={styles.loginImage}/>

//         <ScrollView style={styles.description}>
//           <TouchableOpacity style={{position:'relative', left:10, paddingTop:60, flexDirection:'row', }}>
//             <Entypo name="location" size={25} color='#ff6200'/>
//             <Text style={{textAlign:'left', left:5, top:-4}}>{navigation.getParam('address')}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={{position:'relative', left:10, paddingTop:10, flexDirection:'row'}}>
//             <Entypo name="phone" size={25} color='#ff6200'/>
//             <Text style={{textAlign:'left', left:5}}>{navigation.getParam('contact_person_phone')}</Text>
//           </TouchableOpacity>

//           {/* <TouchableOpacity style={{position:'relative', left:10, paddingTop:20, flexDirection:'row'}}>
//             <FontAwesome name="fax" size={25} color='#ff6200'/>
//             <Text style={{textAlign:'left', left:5}}>+62 431 7282 788</Text>
//           </TouchableOpacity> */}

//           <TouchableOpacity style={{position:'relative', left:10, paddingTop:20, flexDirection:'row'}}>
//             <MaterialCommunityIcons name="email" size={25} color='#ff6200'/>
//             <Text style={{textAlign:'left', left:5}}>{navigation.getParam('website')}</Text>
//           </TouchableOpacity>

//           {/* <Text style={{padding:14, paddingTop:30,fontSize: 20, fontWeight:'bold', textAlign:'center'}}>Our Facility :</Text>
//           <View style={styles.textfacilty}>
//             <Text>1. The lagoon Resto And Bar</Text>
//             <Text>2. Infinity Pool</Text>
//             <Text>3. Tongkaina GYM</Text>     
//             <Text>4. In-House Spa Service</Text>      
//             <Text>5. Executive Lounge</Text>
//           </View> */}
          
//           <Text style={{padding:14, paddingTop:30,fontSize: 20, fontWeight:'bold', textAlign:'center'}}>Share Us</Text>
//           <TouchableOpacity onPress={()=> onShare(navigation.getParam('link_360'))}
//           style={{left: 100, top: 10, flexDirection:'row'}}>
//             <Entypo name='facebook-with-circle' size={45} color='#3488D6'/>
//           </TouchableOpacity>

//           <TouchableOpacity style={{left: 185, top: -38, flexDirection:'row'}}>
//             <Entypo name='instagram-with-circle' size={45} color='#ED4B63'/>
//           </TouchableOpacity>

//           <TouchableOpacity style={{left: 270, top: -85, flexDirection:'row'}}>
//             <Entypo name='twitter-with-circle' size={45} color='#03A9F4'/>
//           </TouchableOpacity>

//         </ScrollView>

//             <TouchableOpacity onPress={goToMainMenu}
//             style={{position: 'absolute', left:20, top:40,
//           backgroundColor:'#ff6200', padding:10, borderRadius:40,}}>
//         <Feather name="arrow-left" size={24} color='#fff'/>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={goToabout}
//         style={styles.aboutbtn}>
//           <Text style={{fontWeight : "bold" ,color:'#fff'}}>About</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//         style={styles.informationbtn}>
//           <Text style={{fontWeight : "bold" ,color:'#fff'}}>Information</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={goTofeedbacks}
//         style={styles.feedbackbtn}>
//           <Text style={{fontWeight : "bold" ,color:'#fff'}}>feedbacks</Text>
//         </TouchableOpacity>
//             </View>
//         );
//     }

// export default informationScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FFFFFF',
//       // alignItems: 'center',
//       // justifyContent: 'center'
//     },
//     loginImage: {
//       height:height*0.5,
//       width:420,
//     },
//     aboutbtn: {
//       position: 'absolute',
//       left:15,
//       top: 375,
//       padding:16,
//       borderRadius:30,
//       backgroundColor:'#ff6200',
//       elevation:5,
//     },
//     informationbtn: {
//       position: 'absolute',
//       left:140,
//       top: 375,
//       padding:16,
//       borderRadius:30,
//       backgroundColor:'#ff6200',
//       elevation:5,
//     },
//     feedbackbtn: {
//       position: 'absolute',
//       right:12,
//       top: 375,
//       padding:16,
//       borderRadius:30,
//       backgroundColor:'#ff6200',
//       elevation:5,
//     },
//     description:{
//         flex:1,
//         width: 415,
//         backgroundColor: '#E8E8E8',
//         marginTop:-30,
//         borderRadius:30,
//       },
//     textfacilty: {
//       height:120,
//       left:120,
//       top: 5,
//     },
// });