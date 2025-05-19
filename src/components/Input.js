import React from 'react';
import { TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Input = ({ 
  placeholder, 
  value, 
  onChangeText, 
  keyboardType = 'default',
  style = {}
}) => {
  return (
    <TextInput
      style={[globalStyles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default Input;