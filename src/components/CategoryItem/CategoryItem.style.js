import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomStartRadius: 40,
    borderTopStartRadius: 40,
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 18,
  },
});
