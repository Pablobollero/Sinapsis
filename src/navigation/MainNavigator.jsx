import React, { useState } from 'react';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
    //useSelector se utiliza para traer informacion de un estado global
    const user = useSelector(state => state.authReducer.value.user)

    return (
        <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
    );
};

export default MainNavigator;