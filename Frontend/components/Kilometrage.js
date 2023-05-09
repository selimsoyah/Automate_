import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Kilometreage1() {
  return (
    <View style={styles.Kilometreage1}>
      <View style={styles.Group454}>
        <Image
          style={styles.Vector}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x4atqtncd1-1161%3A81?alt=media&token=ee397e36-599b-456b-a787-39161a9b8108",
          }}
        />
        <Text style={styles.Kilometreage}>Kilometreage</Text>
        <Text style={styles._450000}>450000</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Kilometreage1: {
    width: 104,
    height: 93,
    paddingLeft: 10,
    paddingRight: 21,
    paddingTop: 18,
    paddingBottom: 12,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    boxSizing: "border-box",
    margin:9,
  },
  Group454: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    justifyContent:'space-between'
  },
  Vector: {
    width: 19.98,
    height: 16,
  },
  Kilometreage: {
    color: "rgba(141,152,168,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "1500",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
  _450000: {
    color: "rgba(112,112,204,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
})
