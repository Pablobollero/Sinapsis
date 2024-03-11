import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import colors from '../global/colors';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    const image = useSelector((state) => state.authReducer.value.imageCamera)

    return (
        <View style={styles.container}>
            {image? (<Image source={{uri: image}} resizeMode='cover' style={styles.imageProfile} />
            ) 
            :  
            (<><Image source={require('../../assets/alien.png')} style={styles.imageProfile} resizeMode='cover'/> 
            </>)}
            <Pressable style={styles.button} onPress={() => navigation.navigate('Image Selector')}>
                {image? (<Text style={styles.text}>Cambiar Foto de Perfil</Text>) : (<Text style={styles.text}>Agregar Foto de Perfil</Text>) }
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Location Selector')}>
                <Text style={styles.text}>Mi direccion</Text>
            </Pressable>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create ({
    container: {
        backgroundColor:'white',
        padding: 10,
        gap: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    imageProfile: {
        width: '50%',
        height: '40%',
    },
    button: {
        width: '60%',
        elevation: 10,
        backgroundColor: colors.buttons2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    text: {
        fontFamily: 'PoppinsBold',
    },
});