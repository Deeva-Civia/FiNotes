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
    elevation: 4,
    width: 361,
    height: 45,
  },
  primary: {
    backgroundColor: '#10266F',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#10266F',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#10266F',
  },
});
