import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{header: (...props) => <Header {...props}/> }}>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name='Login' component={Login} options={{ header: () => <Header title='Ingresar con tu cuenta' />}}/>
            <Stack.Screen name='Signup' component={Signup} options={{ header: () => <Header title= 'Crea una cuenta' /> }}/>
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({})