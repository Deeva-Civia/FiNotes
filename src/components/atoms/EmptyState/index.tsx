import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Belum ada catatan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    color: '#6B7280',
  },
});

export default EmptyState;
