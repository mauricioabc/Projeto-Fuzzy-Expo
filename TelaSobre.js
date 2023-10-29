import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaSobre({ navigation }) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, textAlign: 'center',marginBottom: 100}}>Este aplicativo foi desenvolvido por alunos de Ciência da Computação, na disciplina de Inteligência Artificial. O sistema desenvolvido apresenta as recomendações de correção do solo para a plantação de espécies de forrageiras a partir dos resultados da análise de solo. </Text>
            <Button title="Confirmar" onPress={() => navigation.navigate('Forrageiras')} color="forestgreen"  />
        
      </View>
    );

}


