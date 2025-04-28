import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms/';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header
        title="Sign Up"
        titleSize={26}
        backgroundColor="#FFFFFF"
        displayBackButton
        align="right"
      />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <Text style={styles.title}>Create New Accounts</Text>
        <Gap height={50} />
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Username" placeholder="Username" />
        <TextInput label="Email" placeholder="address" />
        <TextInput label="Password" placeholder="Password" secureTextEntry />
        <View style={styles.buttonWrapper}>
          <Button label="Sign Up" type="primary" />
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
    marginTop: 5,
  },
});
