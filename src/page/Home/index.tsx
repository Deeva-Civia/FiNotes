import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Gap, Quotes, SearchButton, AddButton} from '../../components/atoms';
import {Header, Category, NotesList} from '../../components/molecules';

const Home = ({
  notes,
  onFavorite,
  handleAddNote,
  searchQuery,
  setSearchQuery,
}) => {
  const allNotes = [...notes].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <View style={styles.pageContainer}>
      <Header title="Welcome Deeva!" titleSize={30} rightImage align="left" />
      <Gap height={27} />
      <View style={styles.contentContainer}>
        <Quotes />
        <Gap height={22} />
        <SearchButton
          width={'100%'}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Gap height={22} />
        <Category />
        <Gap height={22} />
        <NotesList
          notes={allNotes}
          onFavorite={onFavorite}
          text={'Belum ada catatan'}
        />
        <AddButton onPress={handleAddNote} />
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
    flex: 1,
    paddingHorizontal: 22,
  },
});
