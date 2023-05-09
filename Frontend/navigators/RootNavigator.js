import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopCreation from "../screens/ShopCreation";
import Map from '../components/Map';
import LogIn from '../screens/LogIn'
// import SearchShop from '../screens/SearchShop';
import ViewInfo from '../screens/ViewInfo';
import Dashboard from "../screens/Dashboard.js";
import Schedule from '../screens/Schedule';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignUp from '../screens/SignUp';
import SearchMechanicsProfile from '../screens/SearchMechanicsProfile';
import OTPScreen1 from "../screens/OtpScreen1";
import { StyleSheet } from 'react-native';
import CustomTabBarButton from "../components/CustomTabBarButton";
import MarkerGenerator from "../components/MarkerGenerator";
import SearchShop from "../screens/Search";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import AddCar from "../screens/AddCar";
import { Marker } from "react-native-maps";

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused
              ? 'car-sport'
              : 'car-sport-outline';
          } else if (route.name === 'Schedual') {
            iconName = focused ? 'calendar' : 'calendar';
          }
          else if (route.name === 'ShopList') {
            iconName = focused ? 'basket-outline' : 'basket-sharp';
          }
          else if (route.name === 'ViewInfo') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },

      })}

      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Search'

        component={Dashboard}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />
        }}
      />

      <Tab.Screen name='Schedual' component={Schedule} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />
      <Tab.Screen name='ViewInfo' component={ViewInfo} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />
      <Tab.Screen name='ShopList' component={SearchMechanicsProfile} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />

    </Tab.Navigator>

  );
}
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='tab' component={Tabs} />
      <Stack.Screen name='Marker' component ={MarkerGenerator}/>
      <Stack.Screen name="Shop" component={ShopCreation} />
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='Sign' component={SignUp} />
      <Stack.Screen name="AddCars" component={AddCar} />
      <Stack.Screen name="Map" component={Map} />
      {/* <Stack.Screen name="SearchShop" component={SearchShop} /> */}

      <Stack.Screen name='OtpScreen' component={OTPScreen1} />
    </Stack.Navigator>
  );
};

export default RootNavigator;


const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    bottom: 5,
    right: 15,
    left: 15,
    height: 88,
  },
});