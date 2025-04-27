import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, secureTextEntry = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#10266F',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C1C7CD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    backgroundColor: '#FFFFFF',
  },
});
