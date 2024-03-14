import { Text, View, Pressable, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { googleAPI } from '../firebase/googleAPI';
import Card from '../components/Card';
import colors from '../global/colors';

const MyAddress = ({navigation}) => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [address, setAddress] = useState(null);

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


    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Tu direccion confirmada.</Text>
            <Text style={style.paragraph}>Para obtener mas informacion acerca de la siguiente direccion, por favor haga click sobre ella.</Text>
            <Pressable onPress={() => navigation.navigate('Location Selector')}>
                <Card style={style.cardContainer}>
                    <Text>{address}</Text>
                    <Image source={require('../../assets/map.png')} resizeMode='cover'/>
                </Card>
            </Pressable>
        </View>
    );
};

export default MyAddress;

const style = StyleSheet.create ({
    container: {
        flex: 1,
        gap: 45,
        backgroundColor: 'white',
        paddingTop: 35,
        paddingLeft: 35,
        paddingRight: 35,
    },
    textTitle: {
        fontFamily: 'PoppinsBold',
        fontSize: 20,
        textAlign: 'center',
    },
    paragraph: {        
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1.5,
    },
    cardContainer: {
        flexDirection: 'row',
        width: 'fit-content',
        gap: 8,
        borderWidth: 0.25,
        borderColor: colors.buttons1,
        borderRadius: 6,
        backgroundColor: colors.buttons2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
})