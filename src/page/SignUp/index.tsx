import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms/';
import {Profile} from '../../assets';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header
        title="Sign Up"
        titleSize={26}
        displayBackButton
        align="right"
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{'Create New\nAccount'}</Text>
          <View style={styles.imageWrapper}>
            <View style={styles.profileCircle}>
              <Profile width={80} height={80} />
            </View>
          </View>
          <TextInput label="Name" placeholder="Name" />
          <Gap height={14} />
          <TextInput label="Username" placeholder="Username" />
          <Gap height={14} />
          <TextInput label="Email" placeholder="Email address" />
          <Gap height={14} />
          <TextInput label="Password" placeholder="Password" secureTextEntry />
          <Gap height={25} />
          <View style={styles.buttonWrapper}>
            <Button
              label="Sign Up"
              bgColor="#10266F"
              color="#FFFFFF"
              borderColor="#10266F"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EDF3FF',
  },
  scrollContent: {
    flexGrow: 1,
    marginTop: 55,
  },
  contentContainer: {
    backgroundColor: '#EDF3FF',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0B1A51',
    textAlign: 'center',
    marginBottom: 44,
  },
  buttonWrapper: {
    marginTop: 8,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profileCircle: {
    width: 125,
    height: 125,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#0B1A51',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
