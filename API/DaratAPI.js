// import React,{Component} from 'react';
// import { FlatList, ActivityIndicator, Text, View,StyleSheet,
//     Dimensions} from 'react-native';

// const {width,height} = Dimensions.get('window')

// class DaratAPI extends Component {
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
//           function() {}
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <FlatList 
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             <View style={styles.cardView}>
//                 <Text style={styles.sitename}>{item.site_name}</Text>
//                 <Text style={styles.thumbnail}>{item.thumbnail}</Text>
//                 {/* <Text style={styles.category}>{item.category}</Text> */}
//                 <Text style={styles.link_360}>{item.link_360}</Text>
//             </View>
//           )}
//           keyExtractor={({ id }, index) => id}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//       },
//     cardView: {
//         top:80,
//         backgroundColor: 'grey',
//         margin: width * 0.03,
//         borderRadius: width * 0.05,
//         shadowColor: '#000',
//         shadowOffset: { width:0.5, height: 0.5 },
//         shadowOpacity: 0.5,
//         shadowRadius: 3
//     },
//     sitename:{
//         top:-20,
//         width:width,
//         margin:width*0.1,
//         color:'black',
//         fontSize:20,
//         fontWeight:'bold'
//     },
//     thumbnail:{
//         height: height / 9,
//         marginLeft: width * 0.04,
//         marginRight: width * 0.04,
//         marginVertical: height * 0.03
//     },
//     // category:{
//     //     margin:width*0.1,
//     //     marginVertical: width * 0.05,
//     //     marginHorizontal: width * 0.2,
//     //     color: 'black',
//     //     fontSize: 18
//     // },
//     link_360:{
//         top: -20,
//         marginBottom: width * 0.0,
//         marginHorizontal: width * 0.02,
//         fontSize: 15,
//         color: 'black'
//     },
// });
// export default DaratAPI;
