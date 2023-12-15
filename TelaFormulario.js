import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from './Estilo';
import { addDoc, collection, getDocs, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { db } from './Firebase'
import { getAuth } from 'firebase/auth';

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
  const [necessidadeFosforo, setNecessidadeFosforo] = useState('');
  const [necessidadePotassio, setNecessidadePotassio] = useState('');
  const [necessidadeNitrogenio, setNecessidadeNitrogenio] = useState('');
  const [npk, setNpk] = useState('');
  const [nitrogenio, setNitrogenio] = useState('');
  const [materiaOrganica, setMateriaOrganica] = useState('');
  const [teorArgila, setTeorArgila] = useState('');
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:5001');
  const errorMessageApi = 'Houve uma falha de comunicação.';
  const [isLoading, setIsLoading] = useState(false);
  
  const {tipo, estacao} = route.params
  const auth = getAuth();

  const salvaDadosConsulta = async () => {
    const consultaRef = collection(db, 'Hist_Consultas');
    const consultaQuery = query(consultaRef, orderBy('id', 'desc'), limit(1));
    const consultaSnapshot = await getDocs(consultaQuery);
    let proximoId = 1;
    if (!consultaSnapshot.empty) {
      const ultimoDocumento = consultaSnapshot.docs[0];
      proximoId = ultimoDocumento.data().id + 1;
    }

    await addDoc(collection(db, 'Hist_Consultas'), {
      id: proximoId,
      user: auth.currentUser.uid,
      useremail: auth.currentUser.email,
      ph,
      smp,
      ctc,
      bases,
      alSat,
      ca,
      mg,
      p,
      k,
      inoculacao,
      calagem,
      necessidadeFosforo,
      necessidadePotassio,
      necessidadeNitrogenio,
      npk,
      nitrogenio,
      materiaOrganica,
      teorArgila,
      insertDate: serverTimestamp(),
    })
    .then(() => {
      Alert.alert('Sucesso', 'Dados salvos com sucesso.')
    })
  }

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

    console.log('Iniciando integração com a API.')
    setIsLoading(true);

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
      console.log(data.message)
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
        "EficienciaInoculacao": inoculacao,
        "NivelFosforo": p,
        "NivelPotassio": k,
        "MateriaOrganica": materiaOrganica,
        "TeorArgila": teorArgila,
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

      const resultadoAdubacao = data.message;
      const necessidadeN = resultadoAdubacao.N;
      const necessidadeP = resultadoAdubacao.P;
      const necessidadeK = resultadoAdubacao.K;
      setNecessidadeFosforo(necessidadeP)
      setNecessidadeNitrogenio(necessidadeN)
      setNecessidadePotassio(necessidadeK)
  
      console.log('Necessidade de N (Adubação):', necessidadeNitrogenio);
      console.log('Necessidade de P (Adubação):', necessidadeFosforo);
      console.log('Necessidade de K (Adubação):', necessidadePotassio);
      
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        console.error('Mensagem de erro:', error.message);
        console.error('Pilha de execução:', error.st-ack);
      });
      salvaDadosConsulta()
      .then(() => {
        confirmar();
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Erro ao salvar ou confirmar:', error);
      });
  }

  const confirmar = () => {
    navigation.navigate('Resultado');
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
        <Text style={{fontWeight: 'bold'}}>Nitrogênio:</Text>
        <TextInput
          style={styles.input}
          value={nitrogenio}
          onChangeText={(text) => setNitrogenio(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Eficiência da Inoculação(true/false):</Text>
        <TextInput
          style={styles.input}
          value={inoculacao}
          onChangeText={(text) => {setInoculacao(text)}}
        />
        </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Materia Orgânica:</Text>
        <TextInput
          style={styles.input}
          value={materiaOrganica}
          onChangeText={(text) => setMateriaOrganica(text)}
        />
        </View>

      <View style={styles.campo}>
        <Text style={{fontWeight: 'bold'}}>Teor de Argila:</Text>
        <TextInput
          style={styles.input}
          value={teorArgila}
          onChangeText={(text) => setTeorArgila(text)}
        />
      </View>

    </View>
    
    <View style={{marginTop: 430}}>
      {isLoading ? (
          <ActivityIndicator size="large" color="forestgreen" />
        ) : (
          <Button title="Confirmar" onPress={enviarRequisicao} color="forestgreen" />
        )}
    </View>
    </ScrollView>
  </View>
);

}
