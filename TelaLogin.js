import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';

export default function TelaLogin({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Forrageiras');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

    console.log('Email:', email);
    console.log('Senha:', password);

  };

  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
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

      <Button
        title="Login"
        onPress={login}
        color="forestgreen"
        containerStyle={{ width: '100%', marginTop: 20 }}
        raised
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.optionText}>Registre-se</Text>
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
    color: 'forestgreen',
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  optionText: {
    color: 'blue',
  },
});
