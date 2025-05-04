import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms/';
import {Profile} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(null);
  const [photoforDB, setPhotoForDB] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Ups, sepertinya anda tidak memilih foto',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64,${assets.base64}`;
      setPhoto({uri: base64});
      setPhotoForDB(base64);
    }
  };

  const onSubmit = () => {
    const data = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
      photo: photoforDB,
    };
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

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
              <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
                {photo ? (
                  <Image
                    source={photo}
                    style={{width: 80, height: 80, borderRadius: 40}}
                  />
                ) : (
                  <Profile width={80} height={80} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            label="Name"
            placeholder="Name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={14} />
          <TextInput
            label="Username"
            placeholder="Username"
            value={userName}
            onChangeText={value => setUserName(value)}
          />
          <Gap height={14} />
          <TextInput
            label="Email"
            placeholder="Email address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={14} />
          <TextInput
            label="Password"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={25} />
          <View style={styles.buttonWrapper}>
            <Button
              label="Sign Up"
              bgColor="#10266F"
              color="#FFFFFF"
              borderColor="#10266F"
              onPress={onSubmit}
            />
          </View>
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
