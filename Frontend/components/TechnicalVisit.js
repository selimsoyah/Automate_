import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Technicalvisit() {
  return (
    <View style={styles.Technicalvisit}>
      <View style={styles.Group575}>
        <Image
          style={styles.Vector}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/apggzjx4em-1162%3A117?alt=media&token=f6963146-0e89-45b7-8492-2e59be1f271d",
          }}
        />
        <Text style={styles.TechnicalVisit}>Technical Visit</Text>
        <Text style={styles._20230417}>2023/04/17</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Technicalvisit: {
    width: 104,
    height: 93,
    paddingLeft: 10,
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    boxSizing: "border-box",
    margin:9,
  },
  Group575: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    justifyContent:'space-between'
  },
  Vector: {
    width: 20,
    height: 22,
  },
  TechnicalVisit: {
    color: "rgba(141,152,168,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
  _20230417: {
    color: "rgba(112,112,204,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    letterSpacing: "0.2px",
    textDecoration: "underline",
  },
})
