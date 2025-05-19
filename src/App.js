import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Registro from './screens/Registro';
import Historico from './screens/Historico';

const Stack = createNativeStackNavigator();

const App = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const usuarioString = await AsyncStorage.getItem('usuarioLogado');
        if (usuarioString) {
          setUsuario(JSON.parse(usuarioString));
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  if (loading) {
    return null; // Ou um componente de loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!usuario ? (
          <>
            <Stack.Screen name="Login" options={{ title: 'Login' }}>
              {(props) => <Login {...props} onLogin={setUsuario} />}
            </Stack.Screen>
            <Stack.Screen 
              name="Cadastro" 
              component={Cadastro} 
              options={{ title: 'Cadastro' }} 
            />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="Registro" 
              options={{ title: 'Registro' }}
            >
              {(props) => <Registro {...props} usuario={usuario} />}
            </Stack.Screen>
            <Stack.Screen 
              name="Historico" 
              options={{ title: 'Histórico' }}
            >
              {(props) => <Historico {...props} usuario={usuario} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;