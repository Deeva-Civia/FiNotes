import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  Gap,
  Quotes,
  Search,
  NoteItem,
  AddButton,
  EmptyState,
} from '../../components/atoms';
import {Header, Category} from '../../components/molecules';

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Rekonfigurasi URL',
      body: 'Menggunakan file htaccess : sudah tidak pakai index.html',
      createdAt: new Date('2025-04-15').getTime(),
      favorited: false,
    },
    {
      id: '2',
      title: 'Error Handling',
      body: 'Untuk menangani error dalam javascript menggunakan try',
      createdAt: new Date('2025-04-14').getTime(),
      favorited: true,
    },
    {
      id: '3',
      title: 'IP & Domain',
      body: 'IP : 192.168.1.0',
      createdAt: new Date('2025-04-12').getTime(),
      favorited: false,
    },
    {
      id: '4',
      title: 'Port',
      body: 'Port 22 : SSH',
      createdAt: new Date('2025-04-09').getTime(),
      favorited: true,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleFavorite = id => {
    const updatedNotes = notes.map(note =>
      note.id === id ? {...note, favorited: !note.favorited} : note,
    );
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    console.log('Add note pressed');
    // nanti navigasi ke halaman Add Note
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Welcome Deeva!" titleSize={30} rightImage align="left" />
      <Gap height={27} />
      <View style={styles.contentContainer}>
        <Quotes />
        <Gap height={22} />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Gap height={22} />
        <Category />
        <Gap height={22} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {notes.length === 0 ? (
            <EmptyState />
          ) : (
            notes.map(item => (
              <NoteItem key={item.id} note={item} onFavorite={handleFavorite} />
            ))
          )}
        </ScrollView>

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
