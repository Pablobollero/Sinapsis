import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Signup'
        screenOptions={{header: () => <Header title='Bienvenidos'/> }}>
            
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({})