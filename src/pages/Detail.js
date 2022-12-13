import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../hooks/useFetch';

const Detail = ({route}) => {
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/lookup.php?i=${String(route.params)}`,
  );

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleYoutube = () => {
    Linking.canOpenURL(data.meals[0].strYoutube).then(supported => {
      if (supported) {
        Linking.openURL(data.meals[0].strYoutube);
      } else {
        Alert.alert("Don't know how to handle YouTube");
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{data.meals[0].strMeal}</Text>
          <Text style={styles.area}>{data.meals[0].strArea}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{data.meals[0].strInstructions}</Text>
          <Button
            color={'red'}
            title="Watch on Youtube"
            onPress={handleYoutube}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 240,
  },
  innerContainer: {
    margin: 10,
  },
  title: {
    fontSize: 26,
    color: '#8d4004',
  },
  area: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    borderWidth: 0.5,
    marginVertical: 10,
    borderColor: '#0005',
  },
  contentContainer: {
    margin: 10,
  },
  content: {
    marginBottom: 10,
  },
});
