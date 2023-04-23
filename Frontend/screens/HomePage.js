import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

const HomePage = () => {
  const checkauth = () => {
    Axios.get("http://192.168.1.4:3000/auth", {
      headers: {
        "Access Token": AsyncStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
    return (
      <View style={styles.container}>
       <View>
               <TouchableOpacity onPress={checkauth}><Text>Check Auth</Text></TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
 container:{
      flex:1,
      alignItems:'center',
      textAlign:'center',
 }
});
export default HomePage;