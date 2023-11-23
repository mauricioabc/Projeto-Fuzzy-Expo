import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Estilo';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth }from './Firebase';

export default function SignUp({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repeatSenha, setRepeatSenha] = useState('');

    const handleSignUp = () => {
            if (senha == repeatSenha) {
                createUserWithEmailAndPassword(auth, email, senha)
                    .then(() => {
                        navigation.navigate('Login');
                    })
                    .catch((error) => {
                    alert(error.message);
                    })
            } else {
                alert('As senhas devem ser iguais!');
            }
    };
}
