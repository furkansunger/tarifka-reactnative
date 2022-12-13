import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './MealItem.style';

const MealItem = ({mealItem, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.mealImg}
          source={{uri: mealItem.strMealThumb}}
          resizeMode="cover">
          <Text style={styles.mealTitle}>{mealItem.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealItem;
