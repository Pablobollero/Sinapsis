import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputForm from '../components/InputForm';
import colors from '../global/colors';
import SubmitButton from '../components/SubmitButton';
import { useLoginMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { loginSchema } from '../validations/loginSchema';
import { insertSession } from '../db/index';

const Login = () => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerLogIn, result] = useLoginMutation();

    //El useEffect ejecuta cuando algo se modifica, en este caso cuando "result" sufra una modificacion.
    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
            })
            .then()
            .catch()
        }
    }, [result]);

    //Lo utilizamos para ejecutar una accion
    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            loginSchema
                .validateSync({ email, password }, { abortEarly: false });
            setErrorEmail("");
            setErrorPassword("");
            triggerLogIn({ email, password });
        } catch (err) {
            err.inner.forEach((err) => {
                switch (err.path) {
                    case 'email':
                        setErrorEmail(err.message);
                        break;
                    case 'password':
                        setErrorPassword(err.message);
                        break;
                    default:
                        break;
                }
            });
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingresa tus datos para acceder...</Text>
            <InputForm label={"Email"} error={errorEmail} onChange={setEmail} placeholder="fulano@domain" />
            <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true} placeholder="Tu clave vinculada a tu correo" />
            {result.isLoading ? (<ActivityIndicator size="large" color="#00f3ff" />) : (<SubmitButton style={styles.button} title={'Ingresar!'} onPress={onSubmit} />)}
            <View style={styles.tipsContainer}>
                <Text style={styles.title}>
                    Sina Tips
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.title}>Email:</Text> Debe ser aquel que utilizaste al momento del Registro, es decir, cuando creaste tu cuenta.
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.title}>Password:</Text> Debe ser aquella que vinculaste al email Registrado y no tener menos de 6 caracteres.
                </Text>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: '15%',
        paddingLeft: 35,
        paddingRight: 35,
        gap: 65,
        alignItems: 'center',
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