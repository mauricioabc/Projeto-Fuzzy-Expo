// DetalhesConsulta.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesConsulta({ route }) {
  const { consulta } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Consulta</Text>
      <Text>ID: {consulta.id}</Text>
      <Text>Al Sat: {consulta.alSat}</Text>
      <Text>Bases: {consulta.bases}</Text>
      <Text>Ca: {consulta.ca}</Text>
      <Text>Calagem: {consulta.calagem}</Text>
      <Text>Ctc: {consulta.ctc}</Text>
      <Text>Inoculação: {consulta.inoculacao}</Text>
      <Text>Data de Inserção: {consulta.insertDate.toDate().toLocaleString()}</Text>
      <Text>K: {consulta.k}</Text>
      <Text>Matéria Orgânica: {consulta.materiaOrganica}</Text>
      <Text>Mg: {consulta.mg}</Text>
      <Text>Necessidade Fósforo: {consulta.necessidadeFosforo}</Text>
      <Text>Necessidade Nitrogênio: {consulta.necessidadeNitrogenio}</Text>
      <Text>Necessidade Potássio: {consulta.necessidadePotassio}</Text>
      <Text>Nitrogênio: {consulta.nitrogenio}</Text>
      <Text>NPK: {consulta.npk}</Text>
      <Text>P: {consulta.p}</Text>
      <Text>PH: {consulta.ph}</Text>
      <Text>SMP: {consulta.smp}</Text>
      <Text>Teor de Argila: {consulta.teorArgila}</Text>
      <Text>Usuário: {consulta.user}</Text>
      <Text>Email do Usuário: {consulta.useremail}</Text>
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
});
