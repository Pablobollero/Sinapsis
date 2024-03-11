import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { googleAPI } from '../firebase/googleAPI';


const MapPreview = ({ location }) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:0x00f3ff%7Clabel:S%7C${location.latitude},${location.longitude}
    &key=${googleAPI.mapStatic}`
    
    return (
        <View style={styles.mapPreview}>
            <Image style={styles.mapImage} source={{uri : mapPreviewUrl}} />
        </View>
    );
};

export default MapPreview;

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: 300,
        height: 300,
    },
});