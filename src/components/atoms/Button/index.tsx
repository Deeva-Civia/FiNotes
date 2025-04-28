import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, type = 'primary', onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'secondary' ? styles.secondary : styles.primary,
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          type === 'secondary' ? styles.secondaryText : styles.primaryText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
    elevation: 10,
  },
  primary: {
    backgroundColor: '#0B1A51', // Navy
  },
  secondary: {
    backgroundColor: '#FFFFFF', // Putih
    borderWidth: 1,
    borderColor: '#0B1A51', // Border Navy
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  primaryText: {
    color: '#FFFFFF', // Putih
  },
  secondaryText: {
    color: '#0B1A51', // Navy
  },
});
