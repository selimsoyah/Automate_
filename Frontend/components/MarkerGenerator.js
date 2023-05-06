import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Text, Pressable, Image } from 'react-native';
import * as Location from 'expo-location';
import ShopCreation from '../screens/ShopCreation';
export default function MarkerGenerator({ navigation }) {
    const [region, setRegion] = useState()
    useEffect(() => {
        userLocation()
    }, [])
    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErroMsg('permission denied')
            return
        }
        let location = await Location.getCurrentPositionAsync()
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

    }
    const coord = [
        { coordinates: { latitude: 36.794829, longitude: 10.073459 }, title: 'Hama Shop' },
        { coordinates: { latitude: 36.818610, longitude: 10.165960 }, title: 'Stoufa Shop' },
        { coordinates: { latitude: 36.851711, longitude: 10.199877 }, title: '3jeli Tn' },
        { coordinates: { latitude: 36.855452, longitude: 10.238358 }, title: 'Mercedez Benz' },
        { coordinates: { latitude: 36.802279, longitude: 10.232275 }, title: 'salim shop' }
      ];
      


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={region}
            >
                {
                    coord.map((item) => {
                        console.log(item.coordinates)
                        return (
                            
                            <Marker coordinate={item.coordinates} title={item.title} />
                        )
                    })
                }

            </MapView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});