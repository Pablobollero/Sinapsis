import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm';
import { useSignUpMutation } from '../services/authService';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { signupSchema } from '../validations/signupSchema';
import colors from '../global/colors';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignUp, result] = useSignUpMutation();

    //El useEffect ejecuta cuando algo se modifica, en este caso cuando "result" sufra una modificacion.
    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result]);

    //Lo utilizamos para ejecutar una accion
    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            signupSchema
                .validateSync({ email, password, confirmPassword }, { abortEarly: false });
            setErrorEmail("");
            setErrorPassword("");
            setErrorConfirmPassword("");
            triggerSignUp({ email, password, confirmPassword });
        } catch (err) {
            err.inner.forEach((error) => {
                switch (error.path) {
                    case 'email':
                        setErrorEmail(error.message);
                        break;
                    case 'password':
                        setErrorPassword(error.message);
                        break;
                    case 'confirmPassword':
                        setErrorConfirmPassword(error.message);
                        break;
                    default:
                        break;
                }
            });
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingresa los siguientes datos para crear una cuenta!</Text>
            <InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
            <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true} />
            <InputForm label={"Confirmar Password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true} />
            {result.isLoading ? (<ActivityIndicator size="large" color="#00f3ff" />) : (<SubmitButton style={styles.button} title={'Registrate!'} onPress={onSubmit} />)}
            <View style={styles.tipsContainer}>
                <Text style={styles.title}>
                    Sina Tips!
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.title}>Email:</Text> Debe ser aquel que utilizaste al momento del Registro, es decir, cuando creaste tu cuenta.
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.title}>Password:</Text> Debe ser aquella que vinculaste al email Registrado y no tener menos de 6 caracteres.
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.title}>Confirmar Password:</Text> Debe ser la misma ingresada en Password, es decir, deben coincidir, ser identicas.
                </Text>
            </View>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 45,
        paddingLeft: 35,
        paddingRight: 35,
        gap: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    button: {
        backgroundColor: colors.buttons2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        width: '30%',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
    text: {
        fontFamily: 'Regular',
        letterSpacing: 1.75,
        fontSize: 16,
        textAlign: 'center',
    },
    tipsContainer: {
        width: '90%',
        gap: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Bold',
        letterSpacing: 1.5,
    },
    paragraph: {
        fontFamily: 'Regular',
        letterSpacing: 1.75,
        fontSize: 12,
        textAlign: 'center',
    },
});