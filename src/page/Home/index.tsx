import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <Header
        title="Welcome Deeva!"
        titleSize={30}
        backgroundColor="#EDF3FF"
        rightImage
        align="left"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EDF3FF',
  },
});
