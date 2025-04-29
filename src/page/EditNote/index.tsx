import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

const categories = ['Back-End', 'Front-End', 'DevOps', 'Mobile', 'UI/UX'];

const RekonfigurasiURL = () => {
  const [selectedCategory, setSelectedCategory] = useState('Back-End');
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('Rekonfigurasi URL');
  const [description, setDescription] = useState(
    'Menggunakan file htaccess : sudah tidak pakai index.html\n' +
    'atau index.php tapi sudah gunakan class, method dan\n' +
    'parameter di url'
  );

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const handleSave = () => {
    Alert.alert('Saved', `Judul: ${title}\nKategori: ${selectedCategory}\nIsi:\n${description}`);
  };

  const handleDelete = () => {
    Alert.alert('Deleted', 'Catatan berhasil dihapus.');
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <TextInput
            style={styles.title}
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.date}>18 April 2025 18:16</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.dropdownText}>{selectedCategory} ⬇️</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.description}
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </ScrollView>

        {/* BOTTOM SECTION */}
        <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.imageUpload}>
            <View style={styles.uploadIconContainer}>
              <Text style={styles.plusIcon}>+</Text>
              <Image 
                source={require('../../assets/icon.png')} 
                style={styles.uploadIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal Dropdown */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#EDF3FF',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 11,
    color: '#7D7D7D',
    marginTop: 4,
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#7D7D7D',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 15,
    width: 120,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
  description: {
    fontSize: 13,
    color: '#000',
    lineHeight: 20,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 10,
    position: 'relative',
  },
  imageUpload: {
    width: 45,
    height: 45,
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  uploadIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    top: 2,
    right: 8,
  },
  uploadIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#0B1A51',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginRight: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: 200,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 14,
    color: '#000',
  },
});

export default RekonfigurasiURL;
