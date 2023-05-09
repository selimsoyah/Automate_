import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Carage() {
  return (
    <View style={styles.Carage}>
      <View style={styles.Group360}>
        <Image
          style={styles.Vector}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zfl7sa20b9n-1162%3A120?alt=media&token=0ec79570-8599-4ba6-bd83-b59c37e9706e",
          }}
        />
        <Text style={styles.CarAge}>Car Age</Text>
        <Text style={styles._20200505}>2020/05/05</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Carage: {
    width: 104,
    height: 93,
    paddingLeft: 4,
    paddingRight: 36,
    paddingTop: 11,
    paddingBottom: 12,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    boxSizing: "border-box",
    margin :9,
  },
  Group360: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    justifyContent:'space-between',
  },
  Vector: {
    width: 18,
    height: 20,
  },
  CarAge: {
    color: "rgba(141,152,168,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
  _20200505: {
    color: "rgba(112,112,204,1)",
    fontSize: "9px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
})
