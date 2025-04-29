import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/atoms';
import {StartPage} from '../../assets'; // ilustrasi SVG atau image

const Start = () => {
  return (
    <View style={styles.container}>
      <StartPage width={270} height={200} style={styles.image} />

      <Text style={styles.title}>FiNotes - Filkom Notes</Text>

      <Text style={styles.subtitle}>
        Tempat semua ide dan materi kuliahmu tersimpan dengan rapi. Efisien.
        Terstruktur. {'\n'}
        Khusus mahasiswa Fakultas Ilmu Komputer
      </Text>
      <View style={styles.buttonWrapper}>
        <Button label="Sign In" type="primary" />
        <Button label="Create new account" type="secondary" />
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  image: {
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#10266F',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
});
