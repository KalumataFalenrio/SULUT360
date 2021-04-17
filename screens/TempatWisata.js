import React, { Component, useEffect, useState} from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from "react-native";
import { Feather } from '@expo/vector-icons';
const {width,height} = Dimensions.get('window')

const TempatWisata=({navigation})=>{
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() =>{
        fetchData360();
        return()=>{

        }
    },[])
    // const goToabout = () =>{
    //     navigation.navigate('about',item);
    //   }

    const fetchData360 =()=>{
        const apiURL='http://api.mpdigital.id/kawanua360'
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) =>{
            setfilterData(responseJson);
            setmasterData(responseJson);
        }).catch((error) =>{
            console.error(error);
        })
    }
    const searchFilter = (text)=>{
        if(text){
            const newData= masterData.filter((item)=>{
                const itemData=item.site_name ?   item.site_name.toUpperCase()
                                :''.toUpperCase();
                const textData=text.toUpperCase();
                return itemData.indexOf(textData)>-1;
            });
            setfilterData(newData);
            setsearch(text);
        }else{
            setfilterData(masterData);
            setsearch(text);
        }
    }

    const ItemView=({item})=>{
        return(
            <View style={styles.cardView}>
                  <Text style={styles.sitename}>{item.site_name}</Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('about',item)}>
                  <Image style={styles.image} source={item.thumbnail ? {uri: item.thumbnail } : null}/>
                  </TouchableOpacity>

              {/* <Button
                  buttonTitle="View 360"
                  btnType="360"
                  color="#FFFFFF"
                  backgroundColor="#ff6200"
                  onPress={()=>Linking.openURL(item.link_360)}
                /> */}
              </View>
        )
    }
    // const ItemSeparatorView=()=>{
    //     return(
    //         <View
    //             style={{height:0.8, width:'100%', backgroundColor:'#c8c8c8'}}/>
    //     )
    // }
    return(
        <SafeAreaView >
            <View style={styles.container}>
                <TextInput style={{flex:1}}
                style={styles.TextInputStyle}
                value={search}
                placeholder="search your destination here"
                placeholderTextColor="black"
                onChangeText={(text)=>searchFilter(text)}
                />
                <FlatList
                    data={filterData}
                    keyExtractor={({id}) => id }
                    renderItem={ItemView}
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')}
        style={{position: 'absolute', left:20, top:45,
          backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation:5}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>
        </SafeAreaView>
    )
}
export default TempatWisata;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor:'#E8E8E8'
    },
    itemStyle:{
        padding:10
    },
    TextInputStyle:{
        top:30,
        left : 85,
        marginTop: 16,
        backgroundColor:'white',
        paddingLeft: 24,
        padding : 12,
        borderWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius : 30,
        borderBottomLeftRadius : 30,
        width: '80%',
        elevation: 1,
    },
    cardView: {
     
        marginTop:35,
          backgroundColor: 'white',
          margin: width * 0.03,
          borderRadius: width * 0.04,
          shadowRadius: 3
    },
    image:{
        top:-50,
        height: 190,
        marginLeft:20,
        marginRight:20,
    },
   
    sitename:{
      top:-20,
      width:width,
      margin:width*0.1,
      marginHorizontal: 10,
      color:'black',
      fontSize:20,
      fontWeight:'bold'
    },
});

// class search4 extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>search4</Text>
//             </View>
//         );
//     }
// }
// export default search4;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     TextInput,
//     FlatList,
//     Dimensions,
//     ActivityIndicator,
//     TouchableOpacity,
//     Image,
// } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import * as Animatable from 'react-native-animatable';

// const {width,height} = Dimensions.get('window')

// class search extends Component {
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
//     render() {
//         const cekCategory =(item)=>{
//             if(item.category == "Rekreasi","Aerial","Dive"){
//               return(
                
//                     <View style={styles.cardView}>
//                         <Text style={styles.sitename}>{item.site_name}</Text>
//                         <TouchableOpacity onPress={()=>this.props.navigation.navigate('about',item)}>
//                         <Image style={styles.image} source={item.thumbnail ? {uri: item.thumbnail } : null}/>
//                         </TouchableOpacity>
      
//                     {/* <Button
//                         buttonTitle="View 360"
//                         btnType="360"
//                         color="#FFFFFF"
//                         backgroundColor="#ff6200"
//                         onPress={()=>Linking.openURL(item.link_360)}
//                       /> */}
//                     </View>
                    
//               )
//             }
//           }
//           if (this.state.isLoading) {
//             return (
//               <View style={styles.loading}>
//                 <ActivityIndicator size="large" color="#ff6200" />
//               </View>
//             );
//           }

//         return (
//             <View style={{flex:1}}>
//                 <View style={{height:100, backgroundColor:'#c45653', justifyContent:'center', paddingHorizontal:5}}>
//                     <Animatable.View animation="slideInRight" duration={700} style={{top:15,height:50, backgroundColor:'#fff', flexDirection:'row',padding:5,alignItems:'center'}}>
//                         <Icon name="ios-search" style={{fontSize:25}}/>
//                         <TextInput placeholder="search your destination here"/> 
//                     </Animatable.View>
//                 </View>
//                 <FlatList 
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             cekCategory(item)
//            )
//           }
//           // keyExtractor={(item, category) => 'key' + category}
//           keyExtractor={({id}) => id }
//         />
//             </View>
//         );
//     }
// }
// export default search;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center'
//     },
//     cardView: {
//         top:80,
//           backgroundColor: 'grey',
//           margin: width * 0.03,
//           borderRadius: width * 0.05,
//           shadowColor: '#000',
//           shadowOffset: { width:0.5, height: 0.5 },
//           shadowOpacity: 0.5,
//           shadowRadius: 3
//     },
//     loading: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     image:{
//         top:-50,
//         height: 190,
//         marginLeft:20,
//         marginRight:20,
//         },
// });

// // import React, { Component } from "react";
// // import { 
// //     View,
// //     Text,
// //     StyleSheet,ActivityIndicator,
// // } from "react-native";

// // export default class App extends React.Component {

// //     constructor(props){
// //         super(props);
// //         this.state={
// //             isLoading:true,
// //             dataSource:null,
// //         }
// //     }
// //     componentDidMount(){
// //         return fetch('http://api.mpdigital.id/kawanua360')
// //         .then((response)=>response.json())
// //         .then((responseJson)=>{
// //             this.setState({
// //                 isLoading:false,
// //                 dataSource:responseJson.kawanua360,
// //             })
// //         })
// //     .catch((error)=>{
// //         console.log(eror)
// //     });
// //     }
// //     render() {
// //         if(this.state.isLoading){
// //             return(
// //                 <View style={styles.container}>
// //                     <ActivityIndicator/>
// //                 </View>
// //             )
// //         }else{
// //         return (
// //             <View>
// //                 <TextInput
// //                     style={styles.searchbox}
// //                     placeholder='search your destination'
// //                     placeholderTextColor='#585757'>
// //                     </TextInput>
// //                     <Feather name='search' size={25} color='#585757'  style={
// //                         {position:'absolute', top:270, left:380, elevation:5,}
// //                     }/>
                
// //             </View>
// //             );
// //         }
// //     }
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center'
// //     },
// //     searchbox: {
// //         top:240,
// //         left : 80,
// //         marginTop: 16,
// //         backgroundColor:'#FFFFFF',
// //         paddingLeft: 24,
// //         padding : 12,
// //         borderTopLeftRadius : 30,
// //         borderBottomLeftRadius : 30,
// //         width: '80%',
// //         elevation: 5,
// //     },
// // });