import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './Estilo';

export default function TelaConfirmacao({route, navigation }) {
  const { calagem, necessidadeNitrogenio, necessidadeFosforo, necessidadePotassio } = route.params;

  return (
    <View style={styles.containerTelaFormulario}>
      <Text style={styles.titulo}>Resultado:</Text>
      <View style={styles.containerCampo}>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Calcário: </Text>
          <Text>{calagem}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Necessidade de N (Adubação): </Text>
          <Text>{necessidadeNitrogenio}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Necessidade de P (Adubação): </Text>
          <Text>{necessidadeFosforo}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Necessidade de K (Adubação): </Text>
          <Text>{necessidadePotassio}</Text>
        </View>
        
      </View>
      

      <View style={styles.containerBototoesConf}>
        <View style={styles.botaoVoltar}>
        <Button title="Voltar para o Formulário" style={styles.botaoVoltar} onPress={() => navigation.goBack()} color="forestgreen"/>
        </View>
        <Button title="Voltar para a tela de seleção" onPress={() => navigation.navigate('Forrageiras')} color="forestgreen" />
      </View>
      
    </View>
  );
}

