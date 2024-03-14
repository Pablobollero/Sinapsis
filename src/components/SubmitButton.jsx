import { Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../global/colors';

const SubmitButton = ({onPress, title}) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.buttons2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        width: '60%',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
    text: {
        color: 'black',
        fontSize: 22,
    }
})