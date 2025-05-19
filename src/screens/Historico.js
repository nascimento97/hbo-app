import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Table from '../components/Table';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Historico = ({ usuario }) => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const loadHistorico = async () => {
      if (usuario) {
        try {
          const historicoSalvo = await AsyncStorage.getItem(`historico-${usuario.nome}`);
          setHistorico(historicoSalvo ? JSON.parse(historicoSalvo) : []);
        } catch (error) {
          console.error('Erro ao carregar histórico:', error);
        }
      }
    };
    loadHistorico();
  }, [usuario]);

  const formatarRegistro = (registro) => {
    const meta = usuario.peso * 35;
    const atingiuMeta = parseInt(registro.quantidade) >= meta;
    
    return [
      { label: 'Data', value: registro.data },
      { label: 'Meta', value: `${meta}ml` },
      { label: 'Quantos mls tomou?', value: `${registro.quantidade}ml` },
      { label: 'Chegou na meta?', value: atingiuMeta ? 'Sim' : 'Não' },
    ];
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Histórico de Consumo</Text>
      <Text style={globalStyles.subtitle}>{usuario?.nome || 'Usuário'}</Text>
      
      {historico.map((registro, index) => (
        <View key={index} style={globalStyles.registroContainer}>
          <Table data={formatarRegistro(registro)} />
        </View>
      ))}
    </View>
  );
};

export default Historico;