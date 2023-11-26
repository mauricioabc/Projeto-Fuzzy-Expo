import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';

export default function TelaRecuperarSenha({ navigation }) {
  const [email, setEmail] = useState('');

  const recuperarSenha = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, preencha o email.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        Alert.alert('Sucesso', 'E-mail de recuperação de senha enviado com sucesso.');
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECUPERAR SENHA</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

    <View style={styles.cadastrar}>
      <Button
          title="Enviar"
          onPress={recuperarSenha}
          color="forestgreen"
        />
      </View>
      
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
  cadastrar: {
    marginTop: '1%',
    width: '50%',
    height: '100'
  },
  
});
