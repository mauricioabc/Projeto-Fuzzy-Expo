import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './Estilo';

export default function TelaConfirmacao({route, navigation }) {
  const { calagem, npk } = route.params;
  console.log(calagem)
  console.log(npk)

  return (
    <View style={styles.containerTelaFormulario}>
      <Text style={styles.titulo}>Resultado:</Text>
      <View style={styles.containerCampo}>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Calcário: </Text>
          <Text>{calagem}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >NPK: </Text>
          <Text>{npk}</Text>
        </View>
        
      </View>
      

      <View style={styles.containerBototoesConf}>
        <View style={styles.botaoVoltar}>
        <Button title="Voltar" style={styles.botaoVoltar} onPress={() => navigation.goBack()} color="forestgreen"/>
        </View>
        <Button title="Voltar para o início" onPress={() => navigation.popToTop()} color="forestgreen" />
      </View>
      
    </View>
  );
}

