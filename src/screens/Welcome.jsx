import { Platform, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import colors from '../global/colors';


const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/sinapsisWelcome.jpg')} style={styles.backgroundImage} />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.welcome}>Bienvenido a</Text>
                        <Text style={styles.title}>Sinapsis</Text>
                    </View>
                    <Text style={styles.paragraph}>Nuestro shop en la palma de tu mano!</Text>
                    <Text style={styles.paragraph}>Accede ya</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')} ><Text>Ingresa!</Text></Pressable>
                    <Text style={styles.paragraph}>o registrate!</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Signup')} ><Text>Registrate!</Text></Pressable>
                    <Text style={styles.paragraph}>Para poder ver nuetros productos en stock.</Text>
                </View>
        </View>
    );
};

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    // Define el estilo para la imagen de fondo
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        position: 'absolute',
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        width: '70%',
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingTop: 45,
        alignItems: 'center',
        gap: 35,
    },
    header:{
        marginBottom: 48,
        gap: 30,
    },
    welcome: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Regular',
    },
    title: {
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'Bold',
    },
    paragraph: {
        fontFamily: 'Regular',
        letterSpacing: 1.75,
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.buttons2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        width: '35%',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
});