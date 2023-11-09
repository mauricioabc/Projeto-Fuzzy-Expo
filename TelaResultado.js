import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './Estilo';

export default function TelaResultado({route, navigation }) {

  const { nome,  nomeCientifico, imagem, historia, usos, regiao, comoCultivar} = route.params;

  return (
    <View style={styles.containerTelaFormulario}>
      <Text style={styles.titulo}>Resultado:</Text>
      
      <View style={styles.containerCampo}>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Nome: </Text>
          <Text>{nome + ' (' + nomeCientifico + ')'}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >História: </Text>
          <Text>{historia}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Usos da planta: </Text>
          <Text>{usos}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Regiões de cultivo: </Text>
          <Text>{regiao}</Text>
        </View>
        <View style={styles.campoConf}>
          <Text style={styles.texto} >Como cultivar: </Text>
          <Text>{comoCultivar}</Text>
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

