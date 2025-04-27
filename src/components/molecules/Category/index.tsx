import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ButtonCategory from '../../atoms/ButtonCategory';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Favorite',
    'Back-end',
    'Front-end',
    'Software Engineering',
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(item => (
          <ButtonCategory
            key={item}
            label={item}
            isActive={item === activeCategory}
            onPress={() => setActiveCategory(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
