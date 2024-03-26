import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import colors from '../global/colors';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

    return (
        <View style={styles.container}>
            <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>En esta seccion podras agregar o modificar tu Foto de Perfil como asi tambien constatar y confirmar tu Direccion.</Text>
            </View>
            {profileImage || imageCamera ? (
                <Image
                    source={{ uri: profileImage || imageCamera }}
                    resizeMode="cover"
                    style={styles.imageProfile}
                />
            ) : (
                <>
                    <Image source={require('../../assets/alien.png')} style={styles.imageProfile} resizeMode='cover' />
                </>
            )}
            <Pressable style={styles.button} onPress={() => navigation.navigate('Image Selector')}>
                {profileImage ? (<Text style={styles.buttonText}>Cambiar Foto de Perfil</Text>) : (<Text style={styles.buttonText}>Agregar Foto de Perfil</Text>)}
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('My Address')}>
                <Text style={styles.buttonText}>Mi direccion</Text>
            </Pressable>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 35,
        paddingTop: 30,
    },
    imageProfile: {
        width: '60%',
        height: '35%',
        borderRadius: 125,
    },
    button: {
        width: '45%',
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
    buttonText: {
        fontFamily: 'Bold',
    },
    paragraphContainer: {
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    paragraph: {        
        fontFamily: 'Regular',
        fontSize: 15,
        textAlign: 'center',
        letterSpacing: 1.5,
        },
});