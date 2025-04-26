import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../../assets';

const Search = ({borderColor = '#AEAEAE'}) => {
  return (
    <View style={styles.container(borderColor)}>
      <SearchIcon style={styles.icon} />
      <Text style={styles.title}>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: borderColor => ({
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: borderColor,
  }),
  title: {
    color: '#AEAEAE',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
