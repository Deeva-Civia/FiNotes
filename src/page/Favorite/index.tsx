import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, NotesList, Category} from '../../components/molecules';
import {Gap, Quotes, SearchButton, AddButton} from '../../components/atoms';

const Favorite = ({
  notes,
  onFavorite,
  handleAddNote,
  searchQuery,
  setSearchQuery,
}) => {
  const favoriteNotes = notes
    .filter(note => note.favorited)
    .sort((a, b) => b.createdAt - a.createdAt);

  return (
    <View style={styles.pageContainer}>
      <Header title="Welcome Deeva!" titleSize={30} rightImage align="left" />
      <Gap height={27} />
      <View style={styles.contentContainer}>
        <Quotes />
        <Gap height={22} />
        <SearchButton
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          width={'100%'}
        />
        <Gap height={22} />
        <Category />
        <Gap height={22} />
        <NotesList
          notes={favoriteNotes}
          onFavorite={onFavorite}
          text={'Belum ada catatan.'}
        />
        <AddButton onPress={handleAddNote} />
      </View>
    </View>
  );
};

export default Favorite;

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
