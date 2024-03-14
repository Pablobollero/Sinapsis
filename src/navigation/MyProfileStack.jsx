import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import MyProfile from '../screens/MyProfile';
import ImageSelector from '../screens/ImageSelector';
import LocationSelector from '../screens/LocationSelector';
import MyAddress from '../screens/MyAddress';

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {

    return (
        <Stack.Navigator initialRouteName='My Profile' screenOptions={{header: () => <Header title='Perfil y Direccion'/> }}>
            <Stack.Screen name='My Profile' component={MyProfile} />
            <Stack.Group screenOptions={{header: () => <Header title='Camara'/> }}>
            <Stack.Screen name='Image Selector' component={ImageSelector} />
            </Stack.Group>
            <Stack.Group screenOptions={{header: () => <Header title='Ubicacion'/> }}>
            <Stack.Screen name='My Address' component={MyAddress} />
            </Stack.Group>
            <Stack.Group screenOptions={{header: () => <Header title='Configuracion de ubicacion'/> }}>
            <Stack.Screen name='Location Selector' component={LocationSelector} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default MyProfileStack;