import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');

  const handleCadastro = async () => {
    try {
      const usuariosString = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosString ? JSON.parse(usuariosString) : [];
      usuarios.push({ nome, peso });
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      setNome('');
      setPeso('');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar');
    }
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Cadastro de Usuário</Text>
      <Input
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="Digite seu peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <Button onPress={handleCadastro}>Confirmar Cadastro</Button>
    </View>
  );
};

export default Cadastro;