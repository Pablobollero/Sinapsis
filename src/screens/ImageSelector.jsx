import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import *as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../features/authSlice';
import { usePostProfileImageMutation } from '../services/shopService';

const ImageSelector = ({navigation}) => {
    const [image,setImage] = useState(null);
    const { localId } = useSelector(state => state.authReducer.value);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions();
        if(isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 1,
            });
            if(!result.canceled) {
                setImage(result.assets[0].uri)
            }
        }
    }

    const confirmImage = () => {
        dispatch(setCameraImage(image))
        triggerSaveProfileImage({image, localId})
        navigation.goBack();
    }

    return (
    <View style={styles.container}>
        {image? (
            <>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.confRejContainer}><Text style={styles.text}>PRESIONA<Pressable style={styles.rejectButton} onPress={pickImage}><Text>AQUÍ</Text></Pressable>SI NO TE GUSTA LO QUE VES! &#40;Lo sentimos pero no somos cirujanos plasticos! &#41;.</Text></View>
            <View style={styles.confRejContainer}><Text style={styles.text}>PRESIONA<Pressable style={[styles.rejectButton, styles.confirmButton]} onPress={confirmImage}><Text>AQUÍ</Text></Pressable>PARA CONFIRMAR LA FOTO DE PERFIL SI TIENES UNA GRAN AUTOESTIMA!.</Text></View>
            </>
        ):(
            <>  
                <Text style={styles.text}>Presiona el siguiente boton para acceder a la camara de fotos.</Text>
                    <Pressable style={styles.cameraButton} onPress={pickImage}>
                        <Text>Que commience el Show!</Text>
                    </Pressable>
            </>
        )}
    </View>
);
};

export default ImageSelector;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: '25%',
    gap: 35,
},
image:{
    width: '100%',
    height: '40%',
    borderRadius: 125,
},
cameraButton:{
    width: 'auto',
    borderWidth: 0.25,
    backgroundColor: colors.buttons2,
    borderColor: colors.buttons1,
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 18,
    shadowOffset: {
        width: 0,
        height: 12,
    }
},
confirmButton: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
},
confRejContainer: {
    flexDirection: 'row',
},
rejectButton: {
    backgroundColor: 'orangered',
    borderWidth: 0.25,
    borderColor: 'red',
    borderRadius: 6,
    padding: 10,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 18,
    shadowOffset: {
        width: 0,
        height: 12,
    }
},
text:{
    fontFamily: 'PoppinsRegular',
    textAlign: 'center',
    letterSpacing: 1.5,
    fontSize: 15,
},
});