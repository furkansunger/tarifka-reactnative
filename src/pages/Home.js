import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../hooks/useFetch';
import CategoryItem from '../components/CategoryItem/CategoryItem';

const Home = ({navigation}) => {
  const {data, error, loading} = useFetch(`${Config.API_URL}/categories.php`);

  const handleCategory = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };

  const renderCategories = ({item}) => (
    <CategoryItem
      categoryItem={item}
      onPress={() => handleCategory(item.strCategory)}
    />
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
        data={data.categories}
        renderItem={renderCategories}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFA500',
  },
});
