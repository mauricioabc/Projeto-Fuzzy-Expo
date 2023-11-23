import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

export default function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const criarConta = () => {
    if (password !== repeatPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Conta criada com sucesso!');
        navigation.navigate('TelaLogin');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRIAR CONTA</Text>

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

      <TextInput
        style={styles.input}
        placeholder="Repetir Senha"
        secureTextEntry
        onChangeText={(text) => setRepeatPassword(text)}
        value={repeatPassword}
      />

      <Button
        title="Confirmar"
        onPress={criarConta}
        color="forestgreen"
        containerStyle={{ width: '100%', marginTop: 20 }}
        raised
      />
    </View>
  );
}

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
});
