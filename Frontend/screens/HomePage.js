import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const HomePage = () => {
    return (
      <View style={styles.container}>
        <Text>HomePage</Text>
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