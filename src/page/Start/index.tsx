import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms/';
import {First} from '../../assets';

const Start = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <First />
        <Gap height={26} />
        <Text style={styles.title}>FiNotes - Filkom Notes</Text>
        <Text style={styles.description}>
          Tempat semua ide dan materi kuliahmu tersimpan dengan rapi. Efisien.
          Terstruktur. Khusus mahasiswa Fakultas Ilmu Komputer
        </Text>
        <Gap height={50} />
        <View style={styles.footerCard}>
          <View style={styles.buttonWrapper}>
            <Button label="Sign In" type="primary" />
            <Gap height={16} />
            <Button label="Sign Up" type="secondary" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EDF3FF', // background light blue kayak di gambar
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0B1A51', // warna teks navy gelap
    textAlign: 'center',
    marginBottom: 32,
  },
  description: {
    fontFamily: 'Roboto-Reguler',
    textAlign: 'center',
    color: '#656565',
    paddingHorizontal: 10, // Add padding for readability
    marginBottom: 32,
  },
  footerCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EDF3FF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 0, // Tidak ada padding kiri-kanan
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    alignItems: 'center', // Tengahin isi (opsional)
  },

  buttonWrapper: {
    marginTop: 5,
  },
});
