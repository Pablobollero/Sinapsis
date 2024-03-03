import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm';
import { useSignUpMutation } from '../services/authService';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { signupSchema } from '../validations/signupSchema';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignUp, result] = useSignUpMutation();

    //Lo utilizamos para ejecutar una accion
    const dispatch = useDispatch();

    const onSubmit =() => {
        try {
            signupSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, confirmPassword});
            console.log('Registro exitoso');
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

    //El useEffect ejecuta cuando algo se modifica, en este caso cuando "result" sufra una modificacion.
    useEffect(() => {
        if(result.data) {
            dispatch(setUser(result))
        }
    }, [result]);

    return (
        <View>
        <Text>Register </Text>
        <InputForm label={"Email"} error={errorEmail} onChange={setEmail}/>
        <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true}/>
        <InputForm label={"Confirm Password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true}/>
        <SubmitButton title={'Register'} onPress={onSubmit}/>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({})