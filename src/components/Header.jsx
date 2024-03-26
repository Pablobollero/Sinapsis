import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';

const Header = ({ title }) => {
    const { localId, user } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const onLogout = async () => {
        dispatch(logout());
        const deletedSession = await deleteSession({ localId });
    };

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
            {user && (
            <Pressable onPress={onLogout} style={styles.logoutContiner}>
                <Text style={styles.text}>Salir</Text>
                <View style={styles.continer}>
                    <MaterialCommunityIcons name="exit-run" size={20} color={colors.buttons2} />
                    <Text style={styles.logoutIcon}>&#10132;</Text>
                </View>
            </Pressable>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.background1,
        fontSize: 30,
        width: '100%',
        height: 50,
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
    },
    logoutContiner: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        width: 50,
        top: 8,
    },
    continer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 10,
        color: colors.buttons2,
    },
    logoutIcon: {
        color: colors.buttons2,
        fontSize: 18,
    },
})