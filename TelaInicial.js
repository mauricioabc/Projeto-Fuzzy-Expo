import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import styles from './Estilo';

export default function TelaInicial({ navigation }) {

    const [nomeDescricao, setNomeDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function obterRespostaDoChat() {
      if (!nomeDescricao) {
        alert('Erro: o nome ou descrição da planta é necessário.');
        return; 
      }
      
      console.log('Iniciando integração com a API.')
      setIsLoading(true);

      const endpoint = 'https://api.openai.com/v1/chat/completions';
      const apiKey = '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';
    
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      };
      
      const input = 'Você receberá uma entrada com o nome de uma planta ou uma breve descrição de que planta por de ser, a partir disso deve retornar um JSON com as seguintes informações: nome, nomecientifico, imagem, historia, usos, regiao e comocultivar. Obs: retorne APENAS o JSON. Entrada: ' + nomeDescricao

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Você é um especialista em botânica.' },
          { role: 'user', content: input }
        ]
      };
    
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
      });
    
      try {
        const responseData = await response.json();
        const respostaDoChatString = responseData.choices[0].message.content;
        console.log('Resposta da API:');
        console.log(respostaDoChatString);

        const respostaDoChat = JSON.parse(respostaDoChatString);

        const nome = respostaDoChat.nome;
        const nomeCientifico = respostaDoChat.nomecientifico;
        const imagem = respostaDoChat.imagem;
        const historia = respostaDoChat.historia;
        const usos = respostaDoChat.usos;
        const regiao = respostaDoChat.regiao;
        const comoCultivar = respostaDoChat.comocultivar;

        console.log('Integração realizada com sucesso.');
        confirmar(nome, nomeCientifico, imagem, historia, usos, regiao, comoCultivar);
      } catch (error) {
        console.error('Erro ao processar resposta JSON:', error);
      } finally {
      setIsLoading(false);
      }
      
    }

    const confirmar = (nome,  nomeCientifico, imagem, historia, usos, regiao, comoCultivar) => {
      if (nome) {
        navigation.navigate('Resultado', { nome,  nomeCientifico, imagem, historia, usos, regiao, comoCultivar});
      } else {
        console.error('Dados de resposta inesperados:', nome,  nomeCientifico, imagem, historia, usos, regiao, comoCultivar);
      }
    };
    
    return (
      <View style={styles.containerTelaFormulario}>
        <Text style={styles.titulo}>Informe uma planta:</Text>
        <View style={styles.formulario}>
        <View style={styles.campo}>
          <Text style={{fontWeight: 'bold'}} >Nome ou Descrição:</Text>
          <TextInput
            style={styles.input}
            value={nomeDescricao}
            onChangeText={(text) => setNomeDescricao(text)}
          />
        </View>

      </View>
      
      <View style={{ marginTop: -140 }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="forestgreen" />
        ) : (
          <Button title="Confirmar" onPress={obterRespostaDoChat} color="forestgreen" />
        )}
      </View>

    </View>
    );

}
