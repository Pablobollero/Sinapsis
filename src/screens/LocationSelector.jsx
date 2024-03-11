import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import *as Location from 'expo-location';
import MapPreview from '../components/MapPreview';

const LocationSelector = () => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("El permiso para acceder a la locacion fue rechazado!");
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.address}>Mi direccion</Text>
            {location.latitude ? (
                <View style={styles.noLocationContainer}>
                    <View style={styles.noLocationContainer}>
                        <Text style={styles.text}>Latitud:</Text><Text style={styles.text1}>{location.latitude}</Text>
                        <Text style={styles.text}>Longitud:</Text><Text style={styles.text1}>{location.longitude}</Text>
                        <MapPreview location={location} />
                    </View>
                </View>) : (<Text>{error}</Text>)}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingBottom: 130,
        paddingTop: 40,
    },
    noLocationContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    address: {
        padding: 10,
        fontFamily: 'PoppinsBold',
        fontSize: 20,
    },
    button: {
        width: '80%',
        elevation: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        fontFamily: 'PoppinsBold',
        fontSize: 15,
        color: 'black',
    },
    text1: {
        fontFamily: 'PoppinsRegular',
        fontSize: 15,
        color: 'black',
    },
})