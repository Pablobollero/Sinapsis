import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { increment, decrement } from '../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../global/colors';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.value);
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable onPress={()=> dispatch(decrement())} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        marginBottom: 5,
    },
    button: {
        padding: 8,
        backgroundColor: colors.background2,
        borderRadius: 19,
    },
    span: {
        width: '20%',
        padding: 5,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Regular',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Bold',
        color: colors.background3,
    },
})