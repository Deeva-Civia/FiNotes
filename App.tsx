import React, {useState} from 'react';
import Home from './src/page/Home';
import Favorite from './src/page/Favorite';

const App = () => {
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

  const handleAddNote = () => {
    console.log('Add note pressed');
    // nanti navigasi ke halaman Add Note
  };

  const handleFavorite = id => {
    const updatedNotes = notes.map(note =>
      note.id === id ? {...note, favorited: !note.favorited} : note,
    );
    setNotes(updatedNotes);
  };
  return (
    <Favorite
      notes={notes}
      onFavorite={handleFavorite}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleAddNote={handleAddNote}
    />
  );
};

export default App;
