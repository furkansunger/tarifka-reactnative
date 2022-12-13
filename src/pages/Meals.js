import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import MealItem from '../components/MealItem/MealItem';
import useFetch from '../hooks/useFetch';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, error, loading} = useFetch(
    `${Config.API_URL}/filter.php?c=${strCategory}`,
  );

  const handleMeals = id => {
    navigation.navigate('Detail', id);
  };

  const renderMeals = ({item}) => (
    <MealItem mealItem={item} onPress={() => handleMeals(item.idMeal)} />
  );

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        style={styles.list}
        data={data.meals}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFA500',
  },
});
