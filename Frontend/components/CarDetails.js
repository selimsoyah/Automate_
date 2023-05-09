import { SafeAreaView,ScrollView,StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import OilChange from '../components/oilchangeComp';
import Insurance from '../components/Insurancecomp';
import Kilometrage from '../components/Kilometrage';
import CarAge from '../components/CarAge';
import Technicalvisit from '../components/TechnicalVisit';
export default function viewInfo() {
  return (
    <SafeAreaView style={{backgroundColor: "#1E293B"}}>
        <ScrollView>
            <Text  style={styles.type}>Aygo</Text>
            <Text style={styles.brand}>Toyata</Text>
                <Image
                style={styles.Car}
                source={require("../assets/image121.png")}
                />
            <ScrollView
            contentContainerStyle={{ paddingHorizontal: 60,paddingLeft: -5, justifyContent:'space-between',marginTop:350,}}>
                <Text style={styles.specification}>specification</Text>
                <View style ={{flexDirection : 'row'}}>
                <OilChange/>
                <Insurance/>
                <Kilometrage/>
                </View>
                <View style ={{flexDirection : 'row'}}>
                <CarAge/>
                <Technicalvisit/>
                </View>
            </ScrollView>   
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    specification:{
        top: -60,
        left: "2.71%",
        right: "66.91%",
        color: "rgba(255,255,255,1)",
        fontSize: "25px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        letterSpacing: "0.36px",
    },
    Car:{
        top: "19%",
        height:140
    },
    type:{
        top: 50,
        left: "2.71%",
        right: "66.91%",
        color: "rgba(255,255,255,1)",
        fontSize: "35px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        letterSpacing: "0.36px", 
    },
    brand:{
        top: 70,
        left: "2.71%",
        right: "66.91%",
        color: "red",
        fontSize: "35px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        letterSpacing: "0.36px", 
    }
})