// HistoricoConsultas.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './Firebase';

export default function TelaHistorico() {
  const [historico, setHistorico] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const consultaRef = collection(db, 'Hist_Consultas');
        const consultaQuery = query(consultaRef, orderBy('insertDate', 'desc'));

        const consultaSnapshot = await getDocs(consultaQuery);
        const historicoData = consultaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setHistorico(historicoData);
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    };

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
              <Text>ID: {item.id}</Text>
              {/* Adicione aqui mais componentes Text ou outros para exibir outros detalhes da consulta */}
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
