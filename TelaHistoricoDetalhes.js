// HistoricoConsultas.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './Firebase';

export default function TelaHistoricoDetalhes({route, navigation }) {
  const { selectedDate } = route.params;
  const date = new Date(selectedDate);
  const [historico, setHistorico] = useState([]);
  
  useEffect(() => {
    const carregarHistorico = async () => {
      console.log('Atualizando consulta para a data:', date);
      try {
        const consultaRef = collection(db, 'Hist_Consultas');
        const consultaQuery = query(consultaRef, orderBy('insertDate', 'desc'));

        const consultaSnapshot = await getDocs(consultaQuery);
        const historicoData = consultaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        const historicoValido = [];
        for (const item of historicoData) {
          const itemDate = item.insertDate.toDate();
          itemDate.setUTCHours(0, 0, 0, 0);
          date.setUTCHours(0, 0, 0, 0);

          if (
            itemDate.getFullYear() === date.getFullYear() &&
            itemDate.getMonth() === date.getMonth() &&
            itemDate.getDate() === date.getDate()
          ) {
            historicoValido.push(item);
            console.log('Item válido:', item);
          } else {
            console.log('Item inválido:', item);
          }
        }

        setHistorico(historicoValido);
        if(historicoValido.length == 0){
          Alert.alert('Sucesso', 'Não foram encontrados dados para essa data.')
          navigation.navigate('Historico');
        }
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    }
    carregarHistorico();
  }, []);

  const navigateToDetalhes = (consulta) => {
    navigation.navigate('DetalhesConsulta', { consulta });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Consultas</Text>
      
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetalhes(item)}>
            <View style={styles.consultaItem}>
              <Text>Consulta: {item.id}</Text>
              <Text>Data: {item.insertDate.toDate().toLocaleString()}</Text>
            </View>
          </TouchableOpacity>
        )}
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
  consultaItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },

});