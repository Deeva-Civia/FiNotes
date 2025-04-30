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
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#0B1A51', // lebih gelap navy
    marginBottom: 6,
  },
  input: {
    height: 48, // fix height supaya konsisten
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0', // soft border color
    borderRadius: 12, // lebih bulat
    paddingHorizontal: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 13, // sedikit lebih kecil
    color: '#020202',
    elevation: 1,
  },
});
