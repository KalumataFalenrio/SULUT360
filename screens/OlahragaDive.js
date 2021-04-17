import React,{Component} from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet,
    Dimensions, TouchableOpacity, TextInput, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window')



class OlahragaDive extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('http://api.mpdigital.id/kawanua360')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
 

  render() {
    const cekCategory =(item)=>{
      if(item.category == "Dive"){
        return(
          
              <View style={styles.cardView}>
                  <Text style={styles.sitename}>{item.site_name}</Text>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('about',item)}>
                  <Image style={styles.image} source={item.thumbnail ? {uri: item.thumbnail } : null}/>
                  </TouchableOpacity>
              </View>
              
        )
      }
    }
    
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#ff6200" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({ item }) => (
            cekCategory(item)
           )
          }
          keyExtractor={({id}) => id }
        />
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainMenu')}
        style={{position: 'absolute', left:20, top:40,
          backgroundColor:'#ff6200', padding:10, borderRadius:40, elevation:5}}>
        <Feather name="arrow-left" size={24} color='#fff'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
      },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardView: {
      marginTop:100,
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      
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
  image:{
    top:-50,
    height: 190,
    marginLeft:20,
    marginRight:20,
    },
    link_360:{
        top: -20,
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.02,
        fontSize: 15,
        color: 'black'
    },
});


export default OlahragaDive;
