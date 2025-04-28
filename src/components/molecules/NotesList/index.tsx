import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotesItem from '../../atoms/NotesItem';

const showFormattedDate = date => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const NotesList = ({notes, onFavorite}) => {
  if (!notes || notes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Belum ada catatan</Text>
      </View>
    );
  }

  return (
    <View>
      {notes.map(item => (
        <NotesItem
          key={item.id}
          id={item.id}
          notes={item}
          onFavorite={onFavorite}
          showFormattedDate={showFormattedDate}
        />
      ))}
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  emptyText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#AEAEAE',
  },
});
