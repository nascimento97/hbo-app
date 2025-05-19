import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const Button = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity 
      style={[globalStyles.button, style]}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;