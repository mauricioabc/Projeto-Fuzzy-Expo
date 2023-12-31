import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import TelaFormulario from './TelaFormulario';
import TelaResultado from './TelaResultado';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaRecuperarSenha from './TelaRecuperarSenha';
import TelaHistorico from './TelaHistorico';
import DetalhesConsulta from './DetalhesConsulta';
import TelaHistoricoDetalhes from './TelaHistoricoDetalhes';


const Stack = createStackNavigator();

export default function Routes(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Seja Bem-Vindo">
        <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Recuperar" component={TelaRecuperarSenha} />
        <Stack.Screen name="Forrageiras" component={TelaInicial } options={{ headerLeft: () => null, }} />
        <Stack.Screen name="Formulario" component={TelaFormulario} />
        <Stack.Screen name="Resultado" component={TelaResultado} />
        <Stack.Screen name="Historico" component={TelaHistorico} />
        <Stack.Screen name="HistoricoDetalhes" component={TelaHistoricoDetalhes} />
        <Stack.Screen name="DetalhesConsulta" component={DetalhesConsulta} />
      </Stack.Navigator>
    </NavigationContainer>
    );

}