import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {Gap, Quotes} from '../../components/atoms';

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
      <Gap height={27} />
      <Quotes />
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
