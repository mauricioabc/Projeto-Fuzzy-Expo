import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import TelaFormulario from './TelaFormulario';
import TelaResultado from './TelaResultado';
import TelaSobre from './TelaSobre';

const Stack = createStackNavigator();

export default function Routes(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Seja Bem-Vindo">
      <Stack.Screen name="Seja Bem-Vindo" component={TelaSobre} />
        <Stack.Screen name="Forrageiras" component={TelaInicial} />
        <Stack.Screen name="Formulario" component={TelaFormulario} />
        <Stack.Screen name="Resultado" component={TelaResultado} />
      </Stack.Navigator>
    </NavigationContainer>
    );

}