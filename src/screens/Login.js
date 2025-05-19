import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ onLogin }) => {
  const [nome, setNome] = useState('');

  const handleLogin = async () => {
    try {
      const usuariosString = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosString ? JSON.parse(usuariosString) : [];
      const usuario = usuarios.find((u) => u.nome === nome);
      
      if (usuario) {
        await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        onLogin(usuario);
      } else {
        Alert.alert('Erro', 'Usuário não encontrado!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <Input
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
};

export default Login;