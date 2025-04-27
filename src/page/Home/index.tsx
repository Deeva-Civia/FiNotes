import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Quotes, Search} from '../../components/atoms';
import {Header, Category} from '../../components/molecules';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Welcome Deeva!" titleSize={30} rightImage align="left" />
      <Gap height={27} />
      <View style={styles.contentContainer}>
        <Quotes />
        <Gap height={19} />
        <Search />
        <Gap height={19} />
        <Category />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EDF3FF',
  },
  contentContainer: {
    paddingHorizontal: 22,
  },
});
