import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FiNotes} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <FiNotes />
      <Text style={styles.title}>FiNotes</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Angkor-Regular',
    color: '#10266F',
    fontSize: 50,
  },
});
