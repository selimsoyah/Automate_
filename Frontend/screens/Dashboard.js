import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../assets/searchBar'
import Test from '../components/CarComponent'
export default function carlist() {
  return (
    <SafeAreaView style={{backgroundColor: "#1E293B"}}>
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 60,paddingLeft: 30 ,alignItems:'center'}}>
              <View style={styles.HeadTitle}>
                    <Text style={styles.HeadText}>Salim's Car</Text>
                </View>
            <SearchBar/>
            <Test/>
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