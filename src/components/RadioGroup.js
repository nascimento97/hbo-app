import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const RadioGroup = ({ options, selected, onChange, name }) => {
  return (
    <View style={globalStyles.radioGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={globalStyles.radioLabel}
          onPress={() => onChange(option.value)}
        >
          <View style={{ 
            height: 20, 
            width: 20, 
            borderRadius: 10, 
            borderWidth: 1, 
            borderColor: '#000', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginRight: 10,
          }}>
            {selected === option.value && (
              <View style={{ 
                height: 12, 
                width: 12, 
                borderRadius: 6, 
                backgroundColor: '#000' 
              }} />
            )}
          </View>
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioGroup;