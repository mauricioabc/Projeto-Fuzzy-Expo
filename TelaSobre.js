import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function TelaSobre({ navigation }) {
  
  const imagePaths = {
    logo: require('./assets/logo.png')
  };

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, textAlign: 'center', marginTop: -100, fontWeight: 'bold', }}>
              Plantae Encyclopedia
          </Text>
          <Image
              source={imagePaths['logo']}
              style={{ width: 300, height: 300, marginBottom: 5 }}
          />
          <Text style={{ fontSize: 18, textAlign: 'justify', marginBottom: 20 }}>
              Este aplicativo foi desenvolvido para obter informações sobre uma planta específica ou com uma breve descrição sobre uma planta a qual não se sabe o nome.
              {'\n'}{'\n'}
              A pesquisa será feita pelo ChatGPT e trará o nome científico, história, usos, região e a forma de cultivo da planta pesquisada.
          </Text>
          <Button title="Iniciar" onPress={() => navigation.navigate('Pesquisa')} color="forestgreen" />
      </View>
  );

}
