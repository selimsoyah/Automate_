import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import RootNavigator from "./navigators/RootNavigator";
import Map from "./components/Map";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";
// import SearchMechanicsProfile from './Component/SearchMechanicsProfile'
export default function App() {
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <RootNavigator />
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}
