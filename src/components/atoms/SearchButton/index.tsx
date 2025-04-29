import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../../assets';

const SearchButton = ({
  borderColor = '#AEAEAE',
  searchQuery,
  setSearchQuery,
  width,
}) => {
  return (
    <View style={styles.container(borderColor, width)}>
      <SearchIcon style={styles.icon} />
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
        placeholderTextColor="#AEAEAE"
        style={styles.input}
      />
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: (borderColor, width) => ({
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 40,
    gap: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: borderColor,
  }),
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Roboto-Medium',
    paddingVertical: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
