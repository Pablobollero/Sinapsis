import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import MapPreview from '../components/MapPreview';
import { googleAPI } from '../firebase/googleAPI';
import colors from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation } from '../features/authSlice';
import { usePostUserLocationMutation } from '../services/shopService';

const LocationSelector = () => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(null);
    const { localId } = useSelector((state) => state.authReducer.value);
    const [triggerPostAddress, result] = usePostUserLocationMutation();
    const dispatch = useDispatch();

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
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address);
                }
            } catch (err) {

            }
        })()
    }, [location]);

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address, 
        };
        dispatch(setUserLocation(locationFormatted));

        triggerPostAddress({localId, location: locationFormatted});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Aqui podras constatar y confirmar tu ubicacion en tiempo real.</Text>
            <Text style={styles.textTitle}>Coordenadas Obtenidas</Text>
            {location.latitude ? (
                <View style={styles.noLocationContainer}>
                    <View style={styles.locationContainer} >
                        <View style={styles.location}>
                            <Text style={styles.text}>Latitud:</Text><Text style={styles.text1}>{location.latitude}</Text>
                        </View>
                        <View style={styles.location}>
                            <Text style={styles.text}>Longitud:</Text><Text style={styles.text1}>{location.longitude}</Text>
                        </View>
                    </View>
                        <MapPreview location={location} />
                    <View style={styles.noLocationContainer}>
                        <Text style={styles.text2}>{address}</Text>
                        <Pressable style={styles.button} onPress={onConfirmAddress}>
                            <Text style={styles.text}>Confirmar direccion</Text>
                        </Pressable>
                    </View>
                </View>) : (<Text>{error}</Text>)}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 15,
        paddingBottom: 13,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 30,
    },
    location: {
        flexDirection: 'row',
        gap: 5,
    },
    locationContainer: {
        gap: 18,
        flexDirection: 'row',
    },
    noLocationContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    textTitle:{
        fontFamily: 'Bold',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        width: '80%',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.buttons2,
        borderColor: colors.buttons1,
        margin: 6,
        borderRadius: 6,
        borderWidth: 0.25,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
    text: {
        fontFamily: 'Bold',
        fontSize: 15,
        color: 'black',
    },
    text1: {
        fontFamily: 'Regular',
        fontSize: 15,
        color: colors.buttons1,
    },
    text2: {
        color: colors.buttons1,
        fontSize: 18,
    },
    paragraph: {
        fontFamily: 'Regular',
        fontSize: 15,
        textAlign: 'center',
        letterSpacing: 1.5,
    },
})