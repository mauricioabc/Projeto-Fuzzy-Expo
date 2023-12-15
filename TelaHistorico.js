import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

export default function TelaHistorico() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const navigateToDetalhesHistorico = () => {
    if(selectedDate == null){
      Alert.alert('Erro', 'Selecione um data.');
      return;
    }
    navigation.navigate('HistoricoDetalhes', { selectedDate });
  };

  const onDayPress = (day) => {
    console.log('day.dateString:', day.dateString);
    console.log('new Date(day.dateString):', new Date(day.dateString));
  
    const date = new Date(day.dateString);
    console.log('selectedTimestamp:', date);
  
    setSelectedDate(date.toISOString());
    setMarkedDates({
      [day.dateString]: { selected: true, marked: true, selectedColor: 'blue' },
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Consultas</Text>

      <Calendar style={styles.calendario}
        markedDates={markedDates}
        onDayPress={onDayPress}
      />

      <View style={styles.containerBototoesConf}>
        <View style={styles.botaoVoltar}>
          <Button title="Pesquisar" style={styles.botaoVoltar} onPress={() => navigateToDetalhesHistorico()} color="forestgreen"/>
        </View>
      </View>

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
  botaoVoltar: {
    marginBottom: 20,
    width: 260,
  },
  calendario: {
    marginBottom: 20,
    width: 350,
  },

});
