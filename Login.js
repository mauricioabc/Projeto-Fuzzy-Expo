import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Estilo';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';

export default function Login({navigation}) {

    const handleLogin = (email, senha) => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Forrageiras', { email: email });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

}    
