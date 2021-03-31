import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

const {width} = Dimensions.get('window')

class comments extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{left:10,fontWeight:"bold",fontSize:20,}}>Comments</Text>
          <View style={styles.cardView}>
             <Text style={{fontSize:17, paddingHorizontal: 14,}}>Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan bagian dari kota Manado, ibu kota provinsi Sulawesi Utara, Indonesia. Pulau Bunaken dapat di tempuh dengan kapal cepat (speed boat) atau kapal sewaan dengan perjalanan sekitar 30 menit dari pelabuhan kota Manado. Di sekitar pulau Bunaken terdapat taman laut Bunaken yang merupakan bagian dari Taman Nasional Bunaken. Taman laut ini memiliki biodiversitas kelautan salah satu yang tertinggi di dunia. Selam scuba menarik banyak pengunjung ke pulau ini. Secara keseluruhan taman laut Bunaken meliputi area seluas 75.265 hektare dengan lima pulau yang berada di dalamnya, yakni Pulau Manado Tua (Manarauw), Pulau Bunaken, Pulau Siladen, Pulau Mantehage berikut beberapa anak pulaunya, dan Pulau Naen. Meskipun meliputi area 75.265 hektare, lokasi penyelaman (diving) hanya terbatas di masing-masing pantai yang mengelilingi kelima pulau itu.
Taman laut Bunaken memiliki 20 titik penyelaman (dive spot) dengan kedalaman bervariasi hingga 1.344 meter. Dari 20 titik selam itu, 12 titik selam di antaranya berada di sekitar Pulau Bunaken. Dua belas titik penyelaman inilah yang paling kerap dikunjungi penyelam dan pecinta keindahan pemandangan bawah laut.
Sebagian besar dari 12 titik penyelaman di Pulau Bunaken berjajar dari bagian tenggara hingga bagian barat laut pulau tersebut. Di wilayah inilah terdapat underwater great walls, yang disebut juga hanging walls, atau dinding-dinding karang raksasa yang berdiri vertikal dan melengkung ke atas. Dinding karang ini juga menjadi sumber makanan bagi ikan-ikan di perairan sekitar Pulau Bunaken.
Sayang sekali akibat nama besarnya, banyak orang Indonesia yang bahkan ti</Text>
         </View>
            </View>
        );
    }
}
export default comments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardView: {
        backgroundColor: "grey",
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        opacity:0.5
      },
});