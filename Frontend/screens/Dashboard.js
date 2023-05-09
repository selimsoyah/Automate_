import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CarComponent from '../components/CarComponent'
export default function carlist( {navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: "#1E293B",flex:1}}>
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 60,paddingLeft: 30 ,alignItems:'center'}}>
              <View style={styles.HeadTitle}>
                    <Text style={styles.HeadText}>Salim's Car</Text>
                </View>
            <CarComponent navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HeadTitle:{
  backgroundColor: '#000113',
     height: 100,
     width:500,
     bottom:4
  },
  HeadText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 30
},
})