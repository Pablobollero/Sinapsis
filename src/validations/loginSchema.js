import {object, string} from 'yup';

export const loginSchema = object().shape({
    email: string()
        .required('Email requerido!')
        .email('No es un email valido!!...ej: jdoe@domain...'),
        password: string()
        .required('Contraseña requerida!')
        .min(6, 'La contraseña debe tener al menos 6 caracteres!'),
})