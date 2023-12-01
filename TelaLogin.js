import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button , Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                    const user = userCredential.user;
                    setPassword('');
                    navigation.navigate('Forrageiras');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage);
            });
  };

  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
  }

  const irParaRecuperarSenha = () => {
    navigation.navigate('Recuperar');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity onPress={() => irParaRecuperarSenha()}>
        <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <View style={styles.loginButton}>
        <Button
          title="Entrar"
          onPress={login}
          color="forestgreen"
        />
      </View>

      <View style={styles.optionsContainer}>
        
        <Text style={styles.optionText}>Não possui conta? </Text>
        <TouchableOpacity onPress={() => irParaCadastro()}>
          <Text style={styles.registrar}>Registre-se agora</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    width: '50%',
    height: '100'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  registrar: {
    color: 'blue',
  },
  esqueceuSenha: {
    color: 'blue',
    marginLeft: '59%',
    marginBottom: '3%'
  },

});
