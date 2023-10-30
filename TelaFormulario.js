import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView} from 'react-native';
import styles from './Estilo';

export default function TelaFormulario({ navigation, route }) {

  const [ph, setPh] = useState('');
  const [smp, setSmp] = useState('');
  const [ctc, setCtc] = useState('');
  const [bases, setBases] = useState('');
  const [alSat, setAlSat] = useState('');
  const [ca, setCa] = useState('');
  const [mg, setMg] = useState('');
  const [p, setP] = useState('');
  const [k, setK] = useState('');
  const [inoculacao, setInoculacao] = useState('');
  const [calagem, setCalagem] = useState('');
  const [npk, setNpk] = useState('');
  const [nitrogenio, setNitrogenio] = useState('');
  const [apiUrl, setApiUrl] = useState('http://192.168.1.69:5001');
  const errorMessageApi = 'Houve uma falha de comunicação.';

  const tipo, estacao = route.params

  enviarRequisicao = () => {
    const jsonData = {
      "Especie": "Forrageira",
      "Cultura": tipo,
      "TipoPlantio": "Convencional",
      "phSolo": String(ph),
      "IndiceSMP": String(smp),
      "Bases": String(bases),
      "Ca": String(ca),
      "Mg": String(mg),
      "AlSat": String(alSat),
      "CTC": String(ctc)
    };

    fetch(apiUrl + '/ProcessaCalagem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta da API:', data);
      setCalagem(data.message)
    })
    .catch(error => {
      setCalagem(errorMessageApi)
      console.error('Erro na solicitação:', error);
      console.error('Mensagem de erro:', error.message);
      console.error('Pilha de execução:', error.stack);
    });

      const jsonData2 = {
        "Especie": "Forrageira",
        "Cultura": tipo,
        "Estacao": estacao,
        "TipoPlantio": "Convencional",
        "NivelNitrogenio": nitrogenio,
        "EficienciaInoculacao": "true",
        "NivelFosforo": p,
        "NivelPotassio": k,
        "MateriaOrganica": "4.1",
        "TeorArgila": "45",
        "CTC": ctc
      };
      fetch(apiUrl + '/ProcessaAdubacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData2),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta da API:', data);
        setNpk(data.message)
        setNitrogenio(data.message2)
      })
      .catch(error => {
        setNpk(errorMessageApi);
        setNitrogenio(errorMessageApi);
        console.error('Erro na solicitação:', error);
        console.error('Mensagem de erro:', error.message);
        console.error('Pilha de execução:', error.stack);
      });
      confirmar()
  }

  const confirmar = () => {
    navigation.navigate('Resultado', {
      calagem, npk, nitrogenio
    });
    
  };

  return (
    <View style={styles.containerTelaFormulario}>
      <ScrollView>
      <Text style={styles.titulo}>Informe os dados da análise do solo</Text>
      <View style={styles.formulario}>
      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}} >PH:</Text>
        <TextInput
          style={styles.input}
          value={ph}
          onChangeText={(text) => setPh(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Índice SMP:</Text>
        <TextInput
          style={styles.input}
          value={smp}
          onChangeText={(text) => setSmp(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>CTC(PH7):</Text>
        <TextInput
          style={styles.input}
          value={ctc}
          onChangeText={(text) => setCtc(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Bases:</Text>
        <TextInput
          style={styles.input}
          value={bases}
          onChangeText={(text) => setBases(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>AlSat:</Text>
        <TextInput
          style={styles.input}
          value={alSat}
          onChangeText={(text) => setAlSat(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Ca:</Text>
        <TextInput
          style={styles.input}
          value={ca}
          onChangeText={(text) => setCa(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Mg:</Text>
        <TextInput
          style={styles.input}
          value={mg}
          onChangeText={(text) => setMg(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Fósforo:</Text>
        <TextInput
          style={styles.input}
          value={p}
          onChangeText={(text) => setP(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Potássio:</Text>
        <TextInput
          style={styles.input}
          value={k}
          onChangeText={(text) => setK(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Eficiência da Inoculação:</Text>
        <TextInput
          style={styles.input}
          value={inoculacao}
          onChangeText={(text) => setInoculacao(text)}
        />
      </View>

    </View>
    
    <View style={{marginTop: 300}}>
      <Button title="Confirmar" onPress={enviarRequisicao} color="forestgreen"  />
    </View>
    </ScrollView>
  </View>
);

}
