import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import Table from '../components/Table';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registro = ({ usuario }) => {
  const [dose, setDose] = useState('200');
  const [historico, setHistorico] = useState([]);
  const [meta, setMeta] = useState(0);

  const opcoesDose = [
    { value: '200', label: '200ml' },
    { value: '350', label: '350ml' },
    { value: '500', label: '500ml' },
  ];

  useEffect(() => {
    if (usuario && usuario.peso) {
      const novaMeta = Math.round(usuario.peso * 35);
      setMeta(novaMeta);
    }
  }, [usuario]);

  const handleRegistro = async () => {
    try {
      const hoje = new Date().toLocaleDateString();
      const novoRegistro = { data: hoje, quantidade: dose };
      const novoHistorico = [...historico, novoRegistro];
      setHistorico(novoHistorico);
      await AsyncStorage.setItem(
        `historico-${usuario.nome}`,
        JSON.stringify(novoHistorico)
      );
    } catch (error) {
      console.error('Erro ao salvar registro:', error);
    }
  };

  const calcularConsumo = () => {
    const total = historico.reduce((sum, item) => sum + parseInt(item.quantidade), 0);
    const percentual = meta > 0 ? Math.round((total / meta) * 100) : 0;
    
    return {
      metaDia: `${meta}ml`,
      metaRestante: `${Math.max(0, meta - total)}ml`,
      metaConsumida: `${total}ml`,
      metaPercentual: `${percentual}%`,
    };
  };

  const dadosTabela = [
    { label: 'Meta do dia', value: calcularConsumo().metaDia },
    { label: 'Meta restante', value: calcularConsumo().metaRestante },
    { label: 'Meta já consumida', value: calcularConsumo().metaConsumida },
    { label: 'Meta já consumida (%)', value: calcularConsumo().metaPercentual },
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Registro de Doses de Água</Text>
      <View style={globalStyles.registroForm}>
        <RadioGroup
          options={opcoesDose}
          selected={dose}
          onChange={setDose}
        />
        <Button onPress={handleRegistro}>Registrar</Button>
      </View>
      
      <Table data={dadosTabela} />
      
      <Button style={globalStyles.buttonBlue}>Histórico</Button>
    </View>
  );
};

export default Registro;