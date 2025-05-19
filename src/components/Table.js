import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const Table = ({ data }) => {
  return (
    <View style={globalStyles.table}>
      {data.map((row, index) => (
        <View key={index} style={globalStyles.tableRow}>
          <View style={[globalStyles.tableCell, globalStyles.tableCellFirst]}>
            <Text>{row.label}</Text>
          </View>
          <View style={globalStyles.tableCell}>
            <Text>{row.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Table;