import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms/';

const Start = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <Text style={styles.title}>Sign In To Your Account</Text>
        <Gap height={50} />
        <View style={styles.buttonWrapper}>
          <Button label="Sign In" type="primary" />
          <Button label="Sign Up" type="secondary" />
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
    backgroundColor: '#EDF3FF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0B1A51', // warna teks navy gelap
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonWrapper: {
    marginTop: 5,
  },
});
