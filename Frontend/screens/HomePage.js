import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { useState } from 'react';
import SignUp from './SignUp';
const HomePage = () => {
  const [listuser, setListuser] = useState([]);

  const checkauth = () => {
    Axios.get("http://ip:serverport/auth", {
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
          <SignUp listuser={listuser}/>
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