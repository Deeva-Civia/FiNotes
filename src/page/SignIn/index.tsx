import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms/';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <Text style={styles.title}>Sign In To Your Account</Text>
        <Gap height={50} />
        <TextInput
          label="Username / Email Address"
          placeholder="Enter your username"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />
        <View style={styles.buttonWrapper}>
          <Button label="Sign In" type="primary" />
          <Button label="Create new account" type="secondary" />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    marginTop: 32,
  },
});
