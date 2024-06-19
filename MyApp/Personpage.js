import React from "react";
import { View, StyleSheet, Text,Image, TextInput, TouchableOpacity } from 'react-native';

const Personpage =()=>{
    return(
        <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.text}>
              <Text style={styles.welcomeText}>Nana Afua Antwiwaa Conduah </Text>
              <Text style={{color:"#95969D", fontSize:18}}>nanaafua@gmail.com </Text>
          </View>
              <Image source={require("./assets/Ellipse.png")}/>
        </View>  
        <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:50}}>
            <TextInput style={styles.input} placeholder='search for a job or position'/>
            <TouchableOpacity><View style={{backgroundColor:"#E1E2E6",borderRadius:12,padding:15,}}>
            <Image  source={require("./assets/Filter.png")}/></View></TouchableOpacity>
        </View>
              </View>
    );
};

const styles = StyleSheet.create({
    container: {
   
      
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    head:{
      flexDirection:"row",
      justifyContent:"space-around",
      marginTop:50
    },
     input:{
        padding:9,
        width:250,
        backgroundColor:"#E1E2E6",
        borderRadius:15,
        borderColor:"#E1E2E6"
     }
     
  });
  
export default Personpage;