// DetalhesConsulta.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesConsulta({ route }) {
  const { consulta } = route.params;  
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Consulta</Text>
      <Text style={styles.item}><Text style={styles.bold}>ID:</Text> {consulta.id}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Data da Consulta: </Text>{consulta.insertDate.toDate().toLocaleString()}</Text>
      
      <Text style={styles.title}>Parâmetros da Consulta</Text>
      <Text>Al Sat: {consulta.alSat}</Text>
      <Text>Bases: {consulta.bases}</Text>
      <Text>Ca: {consulta.ca}</Text>
      <Text>Calagem: {consulta.calagem}</Text>
      <Text>Ctc: {consulta.ctc}</Text>
      <Text>Inoculação: {consulta.inoculacao}</Text>
      <Text>K: {consulta.k}</Text>
      <Text>Matéria Orgânica: {consulta.materiaOrganica}</Text>
      <Text>Mg: {consulta.mg}</Text>
      
      <Text>Nitrogênio: {consulta.nitrogenio}</Text>
      <Text>NPK: {consulta.npk}</Text>
      <Text>P: {consulta.p}</Text>
      <Text>PH: {consulta.ph}</Text>
      <Text>SMP: {consulta.smp}</Text>
      <Text>Teor de Argila: {consulta.teorArgila}</Text>
      <Text>Usuário: {consulta.useremail}</Text>

      <Text style={styles.title}>Retorno da Consulta</Text>
      <Text>Análise Fósforo: {consulta.necessidadeFosforo}</Text>
      <Text>Análise Nitrogênio: {consulta.necessidadeNitrogenio}</Text>
      <Text>Análise Potássio: {consulta.necessidadePotassio}</Text>

      <View style={styles.voltarButton}>
          <Button
            title="Voltar"
            color="forestgreen"
            onPress={() => handleVoltar()}
          />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  item: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  voltarButton: {
    width: '40%',
    height: '100',
    marginLeft: '30%',
    marginTop: '4%'
  },

});
