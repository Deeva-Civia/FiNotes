import {ScrollView} from 'react-native';
import React from 'react';
import NotesItem from '../../atoms/NotesItem';
import {EmptyState} from '../../atoms';

const NotesList = ({notes, onFavorite}) => {
  if (!notes || notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {notes.map(note => (
        <NotesItem key={note.id} note={note} onFavorite={onFavorite} />
      ))}
    </ScrollView>
  );
};

export default NotesList;
