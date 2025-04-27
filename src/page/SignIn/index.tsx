import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button} from '../../components/atoms/';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <TextInput
          label="Username / Email Address"
          placeholder="Enter your Username"
        />
        <TextInput label="Password" placeholder="Enter your Password" />
        <Button label="Sign In" />
        <Button label="Creat New Account" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.creat({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
