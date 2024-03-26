import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import colors from '../global/colors';

const InputForm = ({label, error, onChange, isSecure, placeholder}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    }


    return (
        <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput style={styles.input} value={input} onChangeText={onChangeText} secureTextEntry={isSecure}  placeholder={placeholder} autoCapitalize="none"/>
            {error ? (<Text style={styles.error} >{error}</Text>) : (null) }
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    subtitle: {
        width: "90%",
        fontSize: 12,
        fontFamily: 'Regular',
    },
    error: {
        fontSize: 16,
        color: "red",
        fontFamily: 'Bold',
    },
    input: {
        width: "90%",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.blue_100,
        padding: 2,
        fontSize: 15,
        fontFamily: 'Bold',
    },
});