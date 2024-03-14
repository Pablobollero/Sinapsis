import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm';
import { useSignUpMutation } from '../services/authService';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { signupSchema } from '../validations/signupSchema';
import colors from '../global/colors';

const Signup = ({navigation}) => {
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
            signupSchema.validateSync({ email, password, confirmPassword })
            triggerSignUp({ email, password, confirmPassword });
        } catch (err) {
            console.log('Catch error');
            console.log(err.path);
            switch (err.path) {
                case 'email':
                    setErrorEmail(err.message)
                    break;
                case 'password':
                    setErrorPassword(err.message)
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(err.message)
                    break;
                default:
                    break;
            }
            console.log(err.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingresa los siguientes datos para crear una cuenta!</Text>
            <InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
            <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true} />
            <InputForm label={"Confirm Password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true} />
            <SubmitButton title={'Registrate!'} onPress={onSubmit} />
            <Text style={styles.text} >Ups! Te equivocaste? No hay problema!</Text>
            <Text style={styles.text} >Si ya estas registrado, haz click en el boton de abajo!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')} ><Text>Ir al Log in!</Text></Pressable>
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
        gap: 35,
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
        fontFamily: 'PoppinsRegular',
    },
});