import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './CategoryItem.style';

const CategoryItem = ({categoryItem, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: categoryItem.strCategoryThumb}}
        />
        <Text style={styles.categoryTitle}>{categoryItem.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryItem;
