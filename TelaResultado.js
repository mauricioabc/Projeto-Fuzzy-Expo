import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './Estilo';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './Firebase'
import { getAuth } from 'firebase/auth';

export default function TelaConfirmacao({ navigation }) {
  const [calagem, setCalagem] = useState('');
  const [necessidadeFosforo, setNecessidadeFosforo] = useState('');
  const [necessidadePotassio, setNecessidadePotassio] = useState('');
  const [necessidadeNitrogenio, setNecessidadeNitrogenio] = useState('');
  const auth = getAuth();

  const buscaDadosUltimaConsulta = async () => {
    const consultaRef = collection(db, 'Hist_Consultas');
    const consultaQuery = query(
      consultaRef,
      where('user', '==', auth.currentUser.uid),
      orderBy('insertDate', 'desc'),
      limit(1)
    );
    const consultaSnapshot = await getDocs(consultaQuery);
    if (!consultaSnapshot.empty) {
      const primeiroDocumento = consultaSnapshot.docs[0];

      console.log(`Extraindo dados do objeto: ${primeiroDocumento.data().id}`)
      setCalagem(primeiroDocumento.data().calagem);
      setNecessidadeNitrogenio(primeiroDocumento.data().necessidadeNitrogenio);
      setNecessidadePotassio(primeiroDocumento.data().necessidadePotassio);
      setNecessidadeFosforo(primeiroDocumento.data().necessidadeFosforo);
    
    } else {
      console.log('Nenhum documento encontrado.');
    }

    return consultaSnapshot
  }

  buscaDadosUltimaConsulta();

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

