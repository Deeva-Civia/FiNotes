import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const RekonfigurasiURL = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.title}>Rekonfigurasi URL</Text>
          <Text style={styles.date}>18 April 2025 18:16</Text>
          
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Back-End ⌄</Text>
          </TouchableOpacity>
          
          <Text style={styles.description}>
            Menggunakan file htaccess : sudah tidak pakai index.html{'\n'}
            atau index.php tapi sudah gunakan class, method dan{'\n'}
            parameter di url
          </Text>
        </ScrollView>

        {/* BOTTOM SECTION */}
        <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
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
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
  description: {
    fontSize: 13,
    color: '#7D7D7D',
    lineHeight: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageUpload: {
    width: 45,
    height: 45,
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default RekonfigurasiURL;