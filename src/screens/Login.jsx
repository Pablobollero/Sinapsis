import { Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm';
import colors from '../global/colors';
import SubmitButton from '../components/SubmitButton';
import { useLoginMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { loginSchema } from '../validations/loginSchema';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerLogIn, result] = useLoginMutation();
    
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
            loginSchema.validateSync({ email, password })
            triggerLogIn({ email, password });
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
                default:
                    break;
            }
            console.log(err.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingresa tu siguiente informacion para acceder!</Text>
            <InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
            <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true} />
            { result.isLoading ? (<ActivityIndicator size="large" color="#00f3ff" />) : (<SubmitButton style={styles.button} title={'Ingresar!'} onPress={onSubmit} />) }
            <Text style={styles.text} >Que?!...No tenes cuenta?</Text>
            <Text style={styles.text} >No hay problema, haz click en el boton de abajo!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Signup')} ><Text>Registrarse!</Text></Pressable>
            
        </View>
    );
};

export default Login;

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