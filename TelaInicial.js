import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './Estilo';

export default function TelaInicial({ navigation }) {

  const data = [
    {
      title: 'Alfafa',
      name: 'Alfafa', 
      estacao: '',
      image: require('./assets/alfafa.jpeg'),
    },
    {
      title: 'Gramíneas de estação fria',
      name: 'Gramíneas', 
      estacao: 'fria',
      image: require('./assets/gramineas_fria.jpeg'),
    },
    {
      title: 'Gramíneas de estação quente',
      name: 'Gramíneas', 
      estacao: 'quente',
      image: require('./assets/gramineas_quente.jpeg'),
    },
    {
      title: 'Leguminosas de estação fria',
      name: 'Leguminosas',
      estacao: 'fria', 
      image: require('./assets/leguminosas_fria.jpeg'),
    },
    {
      title: 'Leguminosas de estação quente',
      name: 'Leguminosas',
      estacao: 'quente', 
      image: require('./assets/leguminosas_quante.jpeg'),
    },
    {
      title: 'Consorciações de gramíneas e de leguminosas de estação quente',
      name: 'Consórcios', 
      estacao: 'quente',
      image: require('./assets/consorciacoes.jpeg'),
    },
    {
      title: 'Milho e sorgo para silagem',
      name: 'Espécies perenes', 
      estacao: '',
      image: require('./assets/milho_sorgo.jpeg'),
    },
    {
      title: 'Pastagens naturais (nativas ou naturalizadas)',
      name: 'Campo natural', 
      estacao: '',
      image: require('./assets/pastagem_natural.jpeg'),
    },
    {
      title: 'Pastagens naturais com introdução de gramíneas e leguminosas',
      name: 'Campo natural', 
      estacao: '',
      image: require('./assets/pastagem_leguminosa_graminea.jpeg'),
    },
    
  ];

    return (
    //<ScrollView>
        <View>
          <Text style={styles.titulo}>Escolha o tipo de forrageira:</Text>
        <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Formulario', item.name, item.estacao)}>
            <View style={{ flexDirection: 'row' , marginBottom: 10, marginTop: 10}}>
              <Image
                source={item.image}
                style={styles.image}
              />
              <Text style={{flexWrap: 'wrap', fontWeight: 'bold'}}>{item.title}</Text>
            </View>
          </TouchableOpacity>)}
          ItemSeparatorComponent={() => (
            // Componente que renderiza o separador
            <View style={{ height: 1, backgroundColor: 'gray' }} />
          )}
        keyExtractor={(item) => item.title}
      />
      </View>
    //</ScrollView>
    );

}


